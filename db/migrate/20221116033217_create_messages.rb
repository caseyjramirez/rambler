class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.belongs_to :sender, null: false, references: :users, foreign_key: {to_table: :users}
      t.belongs_to :reciever, null: false, references: :users, foreign_key: {to_table: :users}
      t.string :message

      t.timestamps
    end
  end
end
