class CreateExercices < ActiveRecord::Migration[5.2]
  def change
    create_table :exercices do |t|
      t.references :traitment, foreign_key: true
      t.string :name
      t.integer :fequency

      t.timestamps
    end
  end
end
