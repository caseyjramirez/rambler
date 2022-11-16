class AddWalkFkToMessages < ActiveRecord::Migration[7.0]
  def change
    add_reference(:messages, :walk, foreign_key: true)
  end
end
