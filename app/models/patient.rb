class Patient < ApplicationRecord
  belongs_to :user
  has_many :bodies, dependent: :destroy

  validates :hospital_patient_id, presence: true
end
