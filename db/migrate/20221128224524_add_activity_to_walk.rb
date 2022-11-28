class AddActivityToWalk < ActiveRecord::Migration[7.0]
  def change
    add_reference(:walks, :activity, foreign_key: true)
  end
end
