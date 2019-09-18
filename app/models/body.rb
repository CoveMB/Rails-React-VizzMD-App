class Body < ApplicationRecord
  belongs_to :patient
  has_many :muscles
  has_many :nerves, through: :muscles
  has_many :traitments
  has_many :exercices, through: :traitments
end
