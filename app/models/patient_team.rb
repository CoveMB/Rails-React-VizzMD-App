class TeamPatient < ApplicationRecord
  belongs_to :patient
  belongs_to :team
end
