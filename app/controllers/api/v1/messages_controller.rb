class Api::V1::MessagesController < ApplicationController
    
    def index
        messages = Message.all
        render json: messages, status: :ok
    end

    def create
        message = Message.create!(messages_params)
        render json: message, status: :created
    end

    private
    def messages_params
        params.permit(:sender_id, :reciever_id, :walk_id, :message)
    end 
end
