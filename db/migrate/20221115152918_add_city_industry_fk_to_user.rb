class AddCityIndustryFkToUser < ActiveRecord::Migration[7.0]
  def change
    add_reference(:users, :city, foreign_key: true)
    add_reference(:users, :industry, foreign_key: true)
  end
end
