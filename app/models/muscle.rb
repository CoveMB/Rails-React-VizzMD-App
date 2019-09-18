class Muscle < ApplicationRecord
  belongs_to :body
  has_many :nerves
end
