class User < ApplicationRecord
    has_many :postings
    has_many :walks

    has_secure_password

    def walks
        keys_to_extract = [:id]
        walks = Walk.where("user_one_id = :query OR user_two_id = :query", query: self.id)
        
        # walks.map do |w|
        #     w.select { |k,_| keys_to_extract.include? k }
        # end

        # walks.map do |w|
        #     puts w
        # end
    end
end
