class Api::V1::UsersController < ApplicationController
    # skip_before_action :authorized_user, only: [:login]

    
    def index
        users = User.all
        render json: users, status: :ok
    end
    
    def show
        render json: current_user, status: :ok
    end
    
    def login
        user = User.find_by(email: params[:email])
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
       else
            render json: {errors: "Invalid pasword or username"}, status: :unauthorized
       end
    end

    def logout
        session.delete(:user_id)
        head :no_content
    end

end