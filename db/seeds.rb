bob = User.create!(
  email: "bmarquiscom@gmail.com",
  hospital_id: "CHU_STJUSTINE_1234",
  hospital_name: "CHU - Saint Justine",
  type: "Doctor",
  name: "Bob",
  surname: "Ross",
  admin: true
)

team = Team.create!(name: "Rehabilitation")
