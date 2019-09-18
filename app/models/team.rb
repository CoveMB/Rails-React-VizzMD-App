class Team < ApplicationRecord
  has_many :user_teams
  has_many :users, through: :user_teams

  has_many :team_patients
  has_many :patients, through: :team_patients
end
