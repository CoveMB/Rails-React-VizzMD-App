class Muscle < ApplicationRecord
  belongs_to :body
  validates :force_right, inclusion: { in: [0, 1, 2, 3, 4, 5] }
  validates :force_left, inclusion: { in: [0, 1, 2, 3, 4, 5] }
end
