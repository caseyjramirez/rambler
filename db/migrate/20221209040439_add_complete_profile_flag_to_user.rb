class AddCompleteProfileFlagToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :complete_profile, :boolean
  end
end
