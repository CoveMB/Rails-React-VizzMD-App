class CreateTeamPatients < ActiveRecord::Migration[5.2]
  def change
    create_table :team_patients do |t|
      t.references :patient, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
