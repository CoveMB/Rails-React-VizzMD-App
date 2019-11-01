class Api::V1::BodiesController <  Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [:index]
  ActionController::Parameters.permit_all_parameters = true

  def create
    @patient = Patient.find(params[:patient_id])
    authorize @patient
    new_body = Body.new
    params[:muscles].each do |muscle|
      new_body.muscles << Muscle.new(
        name: muscle[:name],
        force_right: muscle[:force_right],
        force_left: muscle[:force_left]
      )
    end
    @patient.bodies << new_body
    if @patient.save
      render "api/v1/patients/show", status: :created
    else
      render_error
    end
  end
end
