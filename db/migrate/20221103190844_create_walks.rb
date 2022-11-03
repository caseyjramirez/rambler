class CreateWalks < ActiveRecord::Migration[7.0]
  def change
    create_table :walks do |t|
      t.belongs_to :user_one, null: false, references: :users, foreign_key: {to_table: :users}
      t.belongs_to :user_two, null: false, references: :users, foreign_key: {to_table: :users}
      t.integer :distance
      t.string :location
      t.datetime :date
      t.timestamps
    end
  end
end
