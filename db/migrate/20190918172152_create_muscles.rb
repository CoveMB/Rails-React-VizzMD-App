class CreateMuscles < ActiveRecord::Migration[5.2]
  def change
    create_table :muscles do |t|
      t.references :body, foreign_key: true
      t.string :name
      t.integer :force

      t.timestamps
    end
  end
end
