require 'date'

class Body < ApplicationRecord
  belongs_to :patient
  has_many :muscles, dependent: :destroy

  before_create do
    self.date_data_capture = Time.now
  end

  after_create do
    if muscles.empty?
      new_muscles = [{name: "SCM"}, {name: "Trap"}, {name: "Lat"}, {name: "Pec"}, {name: "Deltoide"}, {name: "Biceps"}, {name: "Triceps"}, {name: "PT"}, {name: "Supi"}, {name: "ECRL(B)"}, {name: "FCR"}, {name: "FDP"}, {name: "EDC"}, {name: "FDI"}, {name: "APB"}, {name: "Psoas"}, {name: "Add long"}, {name: "Quad"}, {name: "Tib ant"}, {name: "PL"}, {name: "Tib post"}, {name: "Ischios"}, {name: "Glut med"}, {name: "Gastrocs"}, {name: "Glut max"} ]
      new_muscles.each do |muscle|
        muscles << Muscle.new(muscle)
      end
    end
  end
end
