class AddCoverPhotoToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :cover_photo, :string
  end
end
