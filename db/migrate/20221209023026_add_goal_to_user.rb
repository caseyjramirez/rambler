class AddGoalToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :mile_goal, :float
  end
end
