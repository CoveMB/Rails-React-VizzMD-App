class AddDateDataCaptureToBodies < ActiveRecord::Migration[5.2]
  def change
    add_column :bodies, :date_data_capture, :date
  end
end
