class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @patient = Patient.new
    if params[:query].present?
      @patients = Patient.where("hospital_patient_id ILIKE ?", "%#{params[:query]}%")
    else
      @patients = @user.patients
    end
    authorize @user
  end
end
