class AddMoreInfosToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :hospital_employee_id, :string
    add_column :users, :hospital_id, :string
    add_column :users, :name, :string
    add_column :users, :surname, :string
    add_column :users, :type, :string
    add_column :users, :admin, :boolean, default: false
  end
end
