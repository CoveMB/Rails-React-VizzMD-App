class AddTraitmentToBodies < ActiveRecord::Migration[5.2]
  def change
    add_column :bodies, :traitment, :text
  end
end
