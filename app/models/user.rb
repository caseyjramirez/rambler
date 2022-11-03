class User < ApplicationRecord
    has_many :postings
    has_many :walks

    has_secure_password

    def walks
        Walk.where("user_one_id = :query OR user_two_id = :query", query: self.id).select(:id, :user_one_id, :user_two_id, :distance, :location, :date)
    end
end
