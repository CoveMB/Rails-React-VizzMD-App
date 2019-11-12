class Patient < ApplicationRecord
  belongs_to :user
  has_many :bodies, dependent: :destroy

  validates :hospital_patient_id, presence: true
  validates :gender, presence: true
  validates :date_of_birth, presence: true

  validates :gender, inclusion: { in: ["male", "female"] }

  before_validation do
    date_of_birth = Date.new(2001,2,3) if date_of_birth.nil?
    gender = ["male", "female"].sample if gender.nil?
  end
end
