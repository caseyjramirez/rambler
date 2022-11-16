class User < ApplicationRecord
    has_many :postings
    has_many :walks
    belongs_to :city
    belongs_to :industry

    has_secure_password

    before_validation :downcase_email

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :city_id, presence: true
    validates :industry_id, presence: true
    validates :company, presence: true
    validates :job_title, presence: true
    validates :email, :presence => true, :uniqueness => true
    validates :password, presence: true
    validates :password, confirmation: true
    validates :password_confirmation, presence: true

    def walks
        keys_to_extract = [:id]
        walks = Walk.where("user_one_id = :query OR user_two_id = :query", query: self.id)
        
        walks.map do |walk|
            if walk[:user_one_id] == self.id
                userId = walk[:user_two_id]
            else
                userId = walk[:user_one_id]
            end

            {
                id: walk[:id],
                distance: walk[:distance],
                location: walk[:location],
                date: walk[:date],
                user: User.select(:id, :first_name, :last_name, :description, :profile_photo).find_by_id(userId),
                messages: Message.where("walk_id = :query", query: walk[:id])
            }
        end
    end

    private

    def downcase_email
        self.email = email.downcase if email.present?
    end
end
