class PatientsController < ApplicationController
  def show
    @patient = Patient.find(params[:id])
    authorize @patient
  end

  def create
    patient = Patient.new(hospital_patient_id: params[:patient][:hospital_patient_id])
    patient.user = current_user
    @patients = current_user.patients
    authorize patient
    if patient.save
      flash[:notice] = "Patient #{patient.hospital_patient_id} created"
      redirect_to patient_path(patient)
    else
      flash[:alert] = "The hospital ID is incorect"
      render "users/show"
    end
  end
end
