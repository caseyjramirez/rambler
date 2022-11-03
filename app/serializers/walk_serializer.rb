class WalkSerializer < ActiveModel::Serializer
  attributes :id, :distance, :location, :date, :user_one, :user_two
  
  has_one :user_one
  has_one :user_two

  def user_one
    user = User.find_by_id(object.user_one_id)
    {
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      city: user.city,
      description: user.description
    }
  end

  def user_two
    user = User.find_by_id(object.user_two_id)
    {
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      city: user.city,
      description: user.description
    }
  end
end
