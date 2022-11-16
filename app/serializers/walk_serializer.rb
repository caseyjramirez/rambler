class WalkSerializer < ActiveModel::Serializer
  attributes :id, :distance, :location, :date, :user_one, :user_two, :messages
  
  has_one :user_one
  has_one :user_two
  has_many :messages

  def user_one
    user = User.find_by_id(object.user_one_id)
    {
      first_name: user.first_name,
      last_name: user.last_name,
      city: user.city,
      industry: user.industry,
      description: user.description,
      job_title: user.job_title,
      company: user.company
    }
  end

  def user_two
    user = User.find_by_id(object.user_two_id)
    {
      first_name: user.first_name,
      last_name: user.last_name,
      city: user.city,
      industry: user.industry,
      description: user.description,
      job_title: user.job_title,
      company: user.company
    }
  end
end
