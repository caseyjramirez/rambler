class Walk < ApplicationRecord
  belongs_to :user_one, class_name: "User"
  belongs_to :user_two, class_name: "User"

  def self.userIds
    [self.user_one.id, self.user_two.id]
  end
end
