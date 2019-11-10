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
      flash[:alert] = "An error occured"
      render "users/show"
    end
  end

  def update
    patient = Patient.find(params[:id])
    @patients = current_user.patients.order(created_at: :desc)
    @patient = Patient.new
    @patient.user = current_user
    authorize @patient
    if patient.update(patient_params)
      flash[:notice] = "Patient #{patient.hospital_patient_id} successfully updated"
    else
      flash[:alert] = "Patient #{patient.hospital_patient_id} could not be updated"
    end
    redirect_to user_path(current_user)
  end

  private

  def patient_params
    params.require(:patient).permit(:hospital_patient_id, :gender, :date_of_birth, :user_id)
  end
end
