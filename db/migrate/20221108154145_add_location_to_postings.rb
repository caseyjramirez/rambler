class AddLocationToPostings < ActiveRecord::Migration[7.0]
  def change
    add_column :postings, :location, :string
  end
end
