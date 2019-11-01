User.destroy_all


bob = User.create!(
  email: "bob@gmail.com",
  password: "password123",
  name: "Benjamin",
  surname: "Marquis",
  admin: true
)



patient1 = Patient.new(
  age: 12,
  hospital_patient_id: "C123"
)

patient2 = Patient.new(
  age: 14,
  hospital_patient_id: "C456"
)

bob.patients << patient1
bob.patients << patient2

bob.save!
