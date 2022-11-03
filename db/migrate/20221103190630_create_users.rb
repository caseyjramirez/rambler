class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :city
      t.integer :age
      t.string :email
      t.string :description
      t.string :password_digest
      t.string :profile_photo

      t.timestamps
    end
  end
end
