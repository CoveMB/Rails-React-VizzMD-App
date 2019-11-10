class Patient < ApplicationRecord
  belongs_to :user
  has_many :bodies, dependent: :destroy

  validates :hospital_patient_id, presence: true
  validates :gender, presence: true
  validates :date_of_birth, presence: true

  validates :gender, inclusion: { in: ["male", "female"] }
end
