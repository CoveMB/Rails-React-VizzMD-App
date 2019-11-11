class BodiesController < ApplicationController
  before_action :set_patient, only: [:new, :show, :index]

  def new
    @save = "create"
    authorize @patient
  end

  def show
    @body = Body.find(params[:id])
    @save = "update"
    authorize @body
  end

  def index
    @bodies = policy_scope(Body).where(patient_id: params[:patient_id]).order(
      date_data_capture: :asc,
      created_at: :asc
    ).map do |body|
      construct_body_for_view(body)
    end
  end

  private

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

  def set_patient
    @patient = Patient.find(params[:patient_id])
  end
end
