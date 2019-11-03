class BodiesController < ApplicationController

  def show
    @body = Body.find(params[:id])
    @save = "update"
    authorize @body
  end

  def index
    @bodies = policy_scope(Body).where(patient_id: params[:patient_id]).order(date_data_capture: :asc).map do |body|
      { body: body,
        muscles: body.muscles,
        traitment: {
          traitment: body.traitment,
          note: body.note
          }
        }
    end
    @patient = Patient.find(params[:patient_id])
  end
end
