class CreateReflexes < ActiveRecord::Migration[5.2]
  def change
    create_table :reflexes do |t|
      t.references :body, foreign_key: true
      t.string :name
      t.integer :reflex_right, default: 0
      t.integer :reflex_left, default: 0

      t.timestamps
    end
  end
end
