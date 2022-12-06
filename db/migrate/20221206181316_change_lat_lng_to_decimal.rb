class ChangeLatLngToDecimal < ActiveRecord::Migration[7.0]
  def change
    change_column(:users, :user_lat, :float)
    change_column(:users, :user_lng, :float)
  end
end
