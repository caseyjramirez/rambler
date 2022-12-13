class AddHasBeenSeenToActivity < ActiveRecord::Migration[7.0]
  def change
    add_column :walks, :has_been_seen, :boolean
  end
end
