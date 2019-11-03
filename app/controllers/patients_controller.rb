class PatientsController < ApplicationController
  def show
    @patient = Patient.find(params[:id])
    @save = "create"
    authorize @patient
  end

  def create
    p params
    @patient = Patient.new(hospital_patient_id: params[:patient][:hospital_patient_id])
    @patient.user = current_user
    authorize @patient
    @patients = current_user.patients
    if @patient.save
      flash[:notice] = "Patient #{@patient.hospital_patient_id} created"
      redirect_to user_patient_path(current_user, @patient)
    else
      flash[:alert] = "The hospital ID is incorect"
      render "users/show"
    end
  end
end
