class CreateNerves < ActiveRecord::Migration[5.2]
  def change
    create_table :nerves do |t|
      t.references :muscle, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
