class CreatePostings < ActiveRecord::Migration[7.0]
  def change
    create_table :postings do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :distance
      t.datetime :date

      t.timestamps
    end
  end
end
