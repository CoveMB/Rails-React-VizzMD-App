class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :hospital_patient_id
      t.integer :age
      t.integer :height
      t.integer :weight
      t.string :gender
      t.text :notes

      t.timestamps
    end
  end
end
