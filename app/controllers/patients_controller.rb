class PatientsController < ApplicationController
  def show
    @patient = Patient.find(params[:id])
    authorize @patient
  end
end
