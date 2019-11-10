class AddDateOfBirthAndRemoveAgeToPatients < ActiveRecord::Migration[5.2]
  def change
    add_column :patients, :date_of_birth, :date
    remove_column :patients, :age
  end
end
