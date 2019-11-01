json.extract! @patient, :hospital_patient_id, :bodies
json.last_muscle_data @patient.bodies.last.muscles do |mucles|
  json.extract! mucles, :name, :force_right, :force_left
end
# json.array! @patient.bodies.last.muscles do |muscle|
#   json.extract! muscle, :name, :force_right, :force_left
# end
