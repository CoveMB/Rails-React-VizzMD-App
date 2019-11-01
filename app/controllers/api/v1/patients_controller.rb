class Api::V1::PatientsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [:index]
  before_action :set_patient, only: [ :show, :update ]

  def show
  end

  def update
    if @patient.update(patient_params)
      render :show
    else
      render_error
    end
  end

  private

  def patient_params
    params.require(:patient).permit(:bodies)
  end

  def set_patient
    @patient = Patient.find(params[:id])
    authorize @patient
  end

  def render_error
    render json: { errors: @patient.errors.full_messages },
      status: :unprocessable_entity
  end
end
