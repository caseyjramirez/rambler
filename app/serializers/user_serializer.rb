class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :city, :age, :email, :description, :profile_photo, :walks

  has_many :postings

  def walks
    object.walks
  end

end
