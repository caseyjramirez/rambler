class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :city, :industry, :company, :job_title, :email, :description, :profile_photo, :cover_photo, :activities, :user_lat, :user_lng, :mile_goal

  has_many :postings

  def activities
    object.walks
  end
end