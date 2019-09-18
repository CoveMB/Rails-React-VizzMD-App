class Patient < ApplicationRecord
  has_many :team_patients
  has_many :teams, through: :team_patients

  has_one :body
  has_many :muscles, through: :body
  has_many :nerves, through: :muscles

  has_many :traitments, through: :body
  has_many :exercices, through: :traitments
end
