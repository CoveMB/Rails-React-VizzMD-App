class CreateTraitments < ActiveRecord::Migration[5.2]
  def change
    create_table :traitments do |t|
      t.references :body, foreign_key: true
      t.text :notes
      t.integer :duration

      t.timestamps
    end
  end
end
