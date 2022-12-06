class Posting < ApplicationRecord
  belongs_to :user
  belongs_to :activity

  scope :inFuture, -> {where('date >= ?', DateTime.current)}
end
