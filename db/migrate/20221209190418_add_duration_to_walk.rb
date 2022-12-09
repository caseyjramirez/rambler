class AddDurationToWalk < ActiveRecord::Migration[7.0]
  def change
    add_column(:walks, :duration, :float)
  end
end
