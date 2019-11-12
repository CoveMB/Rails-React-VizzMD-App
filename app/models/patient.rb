class Patient < ApplicationRecord
  belongs_to :user
  has_many :bodies, dependent: :destroy

  validates :hospital_patient_id, presence: true
  validates :gender, presence: true
  validates :date_of_birth, presence: true

  validates :gender, inclusion: { in: ["male", "female"] }

  before_save do
    if date_of_birth.nil?
      date_of_birth = Date.new(2001,2,3)
    end
    if gender.nil?
      gender = ["male", "female"].sample
    end
  end
end
