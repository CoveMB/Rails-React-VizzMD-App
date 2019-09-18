class CreateBodies < ActiveRecord::Migration[5.2]
  def change
    create_table :bodies do |t|
      t.references :patient, foreign_key: true
      t.text :note

      t.timestamps
    end
  end
end
