class Body < ApplicationRecord
  belongs_to :patient
  has_many :muscles, dependent: :destroy

  after_create do
    if muscles.empty?
      new_muscles = [{name: "SCM", force_right: rand(0..4)}, {name: "Trap", force_right: rand(0..4)}, {name: "Lat", force_right: rand(0..4)}, {name: "Pec", force_right: rand(0..4)}, {name: "Deltoide", force_right: rand(0..4)}, {name: "Biceps", force_right: rand(0..4)}, {name: "Triceps", force_right: rand(0..4)}, {name: "PT", force_right: rand(0..4)}, {name: "Supi", force_right: rand(0..4)}, {name: "ECRL(B)", force_right: rand(0..4)}, {name: "FCR", force_right: rand(0..4)}, {name: "FDP", force_right: rand(0..4)}, {name: "EDC", force_right: rand(0..4)}, {name: "FDI", force_right: rand(0..4)}, {name: "APB", force_right: rand(0..4)}, {name: "Psoas", force_right: rand(0..4)}, {name: "Add long", force_right: rand(0..4)}, {name: "Quad", force_right: rand(0..4)}, {name: "Tib ant", force_right: rand(0..4)}, {name: "PL", force_right: rand(0..4)}, {name: "Tib post", force_right: rand(0..4)}, {name: "Ischios", force_right: rand(0..4)}, {name: "Glut med", force_right: rand(0..4)}, {name: "Gastrocs", force_right: rand(0..4)}, {name: "Glut max", force_right: rand(0..4)} ]
      new_muscles.each do |muscle|
        muscles << Muscle.new(muscle)
      end
    end
  end
end
