class PostingSerializer < ActiveModel::Serializer
  attributes :id, :distance, :date, :location, :isFilled, :activity
  
  has_one :user
  has_one :activity

  def user
    user = User.find_by_id(object.user_id)
    {
      first_name: user.first_name,
      last_name: user.last_name,
      profile_photo: user.profile_photo,
      description: user.description,
      company: user.company,
      job_title: user.job_title,
      industry: user.industry.name,
      id: user.id
    }
  end

  def activity
    activity = Activity.find_by_id(object.activity_id)

    {
      name: activity.name,
      id: activity.id
    }
  end
end
