class AddIsFilledToPosting < ActiveRecord::Migration[7.0]
  def change
    add_column :postings, :isFilled, :boolean
  end
end
