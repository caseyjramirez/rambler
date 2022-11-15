class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :city, :industry, :company, :job_title, :email, :description, :profile_photo, :walks

  has_many :postings

  def walks
    object.walks
  end

end
