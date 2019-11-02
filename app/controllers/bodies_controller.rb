class BodiesController < ApplicationController
  def index
    @bodies = policy_scope(Body).where(patient_id: params[:patient_id])
  end
end
