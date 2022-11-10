class AddLabelToCities < ActiveRecord::Migration[7.0]
  def change
    add_column :cities, :label, :string
  end
end
