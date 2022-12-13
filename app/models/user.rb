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

            user = User.find_by_id(userId)
            user_industry = Industry.find_by_id(user.industry_id)

            puts(user_industry)


            {
                id: walk[:id],
                distance: walk[:distance],
                duration: walk[:duration],
                location: walk[:location],
                has_been_seen: walk[:has_been_seen],
                date: walk[:date],
                poster_id: walk[:user_one_id],
                user: {
                    id: user[:id], 
                    first_name: user[:first_name], 
                    last_name: user[:last_name], 
                    description: user[:description], 
                    profile_photo: user[:profile_photo],
                    job_title: user[:job_title],
                    company: user[:company],
                    industry: user_industry[:name]
                },
                messages: Message.where("walk_id = :query", query: walk[:id]),
                activity: Activity.select(:name, :id).find_by_id(walk[:activity_id])
            }
        end
    end

    private

    def downcase_email
        self.email = email.downcase if email.present?
    end
end
