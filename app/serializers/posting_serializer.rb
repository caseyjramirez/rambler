class PostingSerializer < ActiveModel::Serializer
  attributes :id, :distance, :date
  
  has_one :user

  def user
    user = User.find_by_id(object.user_id)
    {
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      city: user.city,
      description: user.description
    }
  end
end
