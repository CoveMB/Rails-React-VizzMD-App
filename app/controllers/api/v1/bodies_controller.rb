class Api::V1::BodiesController <  Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [:index]
  ActionController::Parameters.permit_all_parameters = true

  def create
    @patient = Patient.find(params[:patient_id])
    new_body = Body.new
    params[:muscles].each do |muscle|
      new_body.muscles << Muscle.new(
        name: muscle[:name],
        force_right: muscle[:force_right],
        force_left: muscle[:force_left]
      )
    end
    @patient.bodies << new_body
    @patient.save!
    authorize @patient
  end
end
