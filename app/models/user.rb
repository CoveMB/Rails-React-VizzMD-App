class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_teams
  has_many :teams, through: :user_teams
  has_many :team_patients, through: :teams
  has_many :patients, through: :team_patients
end
