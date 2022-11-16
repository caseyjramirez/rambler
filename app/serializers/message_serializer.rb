class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :sender, :reciever, :walk
  has_one :sender
  has_one :reciever
  has_one :walk

  def sender
    sender = User.find_by_id(object.sender_id)
    
    sender.id
  end

  def reciever
    reciever = User.find_by_id(object.reciever_id)

    reciever.id
  end

  def walk
    walk = Walk.find_by_id(object.walk_id)
    
    walk.id
  end





  # def sender
  #   sender = User.find_by_id(object.sender_id)
  #   {
  #     first_name: sender.first_name,
  #     last_name: sender.last_name,
  #     profile_photo: sender.profile_photo,
  #     description: sender.description,
  #     id: sender.id
  #   }
  # end

  # def reciever
  #   reciever = User.find_by_id(object.reciever_id)
  #   {
  #     first_name: reciever.first_name,
  #     last_name: reciever.last_name,
  #     profile_photo: reciever.profile_photo,
  #     description: reciever.description,
  #     id: reciever.id
  #   }
  # end
end
