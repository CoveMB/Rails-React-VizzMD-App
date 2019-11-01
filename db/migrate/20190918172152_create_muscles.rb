class CreateMuscles < ActiveRecord::Migration[5.2]
  def change
    create_table :muscles do |t|
      t.references :body, foreign_key: true
      t.string :name
      t.integer :force_right, default: 0
      t.integer :force_left, default: 0

      t.timestamps
    end
  end
end
