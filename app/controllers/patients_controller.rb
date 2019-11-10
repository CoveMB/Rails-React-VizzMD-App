class PatientsController < ApplicationController

  def create
    @patient = Patient.new(patient_params)
    @patient.user = current_user
    authorize @patient
    @patients = current_user.patients
    if @patient.save
      flash[:notice] = "Patient #{@patient.hospital_patient_id} created"
      redirect_to new_user_patient_body_path(current_user, @patient)
    else
      p @patient.errors
      flash[:alert] = "An error occured"
      render "users/show"
    end
  end

  private

  def patient_params
    params.require(:patient).permit(:hospital_patient_id, :gender, :date_of_birth)
  end
end
