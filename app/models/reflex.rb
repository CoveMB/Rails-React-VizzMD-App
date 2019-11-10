class Reflex < ApplicationRecord
  belongs_to :body
  validates :reflex_right, inclusion: { in: [0, 1, 2, 3] }
  validates :reflex_left, inclusion: { in: [0, 1, 2, 3] }
end

Reflex.where(name: "Stylo Radial").destroy_all
