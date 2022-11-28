class AddActivityToPosting < ActiveRecord::Migration[7.0]
  def change
    add_reference(:postings, :activity, foreign_key: true)
  end
end
