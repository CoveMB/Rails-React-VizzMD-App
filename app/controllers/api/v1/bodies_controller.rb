require 'date'

class Api::V1::BodiesController <  Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [:index]
  ActionController::Parameters.permit_all_parameters = true

  before_action :set_patient, only: [ :create, :update ]

  def update
    @body_to_update = Body.find(params[:id])
    update_muscles
    update_reflexes
    create_traitment(@body_to_update)
    if @body_to_update.save
      flash[:notice] = "Snapshot updated"
      render "api/v1/patients/show", status: :accepted
    else
      render_error
    end
  end

  def create
    new_body = Body.new
    create_muscles(new_body)
    create_reflexes(new_body)
    create_traitment(new_body)
    @patient.bodies << new_body
    if @patient.save
      flash[:notice] = "Snapshot created"
      render "api/v1/patients/show", status: :created
    else
      render_error
    end
  end

  def index
    bodies = policy_scope(Body).where(patient_id: params[:patient_id]).order(
      date_data_capture: :asc,
      created_at: :asc
    ).map do |body|
      construct_body_for_view(body)
    end
    render json: bodies
  end

  private

  def set_patient
    @patient = Patient.find(params[:patient_id])
    authorize @patient
  end

  def construct_body_for_view(body)
    { body: body,
      muscles: body.muscles,
      reflexes: body.reflexes,
      traitment:
      {
        traitment: body.traitment,
        note: body.note,
        date: body.date_data_capture
      } }
  end

  def update_reflexes
    params[:reflexes].each do |reflex|
      found_reflex = Reflex.find(reflex[:id])
      found_reflex.update(reflex_right: reflex[:reflex_right], reflex_left: reflex[:reflex_left])
    end
  end

  def update_muscles
    params[:muscles].each do |muscle|
      found_muscle = Muscle.find(muscle[:id])
      found_muscle.update(force_right: muscle[:force_right], force_left: muscle[:force_left])
    end
  end

  def create_muscles(new_body)
    params[:muscles].each do |muscle|
      new_body.muscles << Muscle.new(
        name: muscle[:name],
        force_right: muscle[:force_right],
        force_left: muscle[:force_left]
      )
    end
  end

  def create_reflexes(new_body)
    params[:reflexes].each do |reflex|
      new_body.reflexes << Reflex.new(
        name: reflex[:name],
        reflex_right: reflex[:reflex_right],
        reflex_left: reflex[:reflex_left]
      )
    end
  end

  def create_traitment(body)
    body.note = params[:traitment][:note]
    body.traitment = params[:traitment][:traitment]
    body.date_data_capture = params[:traitment][:date].to_datetime
  end

  def render_error
    render json: { errors: @patient.errors.full_messages },
      status: :unprocessable_entity
  end
end
