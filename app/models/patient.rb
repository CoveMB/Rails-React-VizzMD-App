class Patient < ApplicationRecord
  belongs_to :user
  has_many :bodies, dependent: :destroy

  validates :hospital_patient_id, presence: true, uniqueness: true

  before_create do
    bodies << Body.new
  end
end
