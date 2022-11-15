class RemovePropertiesFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column(:users, :age)
    remove_column(:users, :city)
  end
end
