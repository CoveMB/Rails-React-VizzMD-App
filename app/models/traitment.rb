class Traitment < ApplicationRecord
  belongs_to :body
  has_many :exercices
end
