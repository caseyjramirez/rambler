class AddLatLgnToUser < ActiveRecord::Migration[7.0]
  def change
    add_column(:users, :user_lat, :integer)
    add_column(:users, :user_lng, :integer)
  end
end
