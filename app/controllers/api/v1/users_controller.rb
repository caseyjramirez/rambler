class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:login, :create]

    def getUser
        user = User.first
        render json: user, status: :ok
    end

    def index
        users = User.all
        render json: users, status: :ok
    end
    
    def auth_user
        render json: current_user, status: :ok
    end


    def show
        user = User.find_by_id(params[:id])
        render json: user, status: :ok
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
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update 
        user = User.find_by_id(params[:id])


        if user&.authenticate(params[:password])
            user.update!(user_params)
            render json: user, status: :accepted
       else
            render json: {errors: "Invalid password"}, status: :unauthorized
       end
    end

    def update_activity_goal
        user = User.find_by_id(params[:id])
        puts '🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑'
        puts user
        
        
        user.update_attribute(:mile_goal, params[:mile_goal])

        head :no_content 
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :city_id, :industry_id, :company, :job_title, :email, :password, :password_confirmation, :profile_photo, :cover_photo, :description, :user_lat, :user_lng, :mile_goal, :complete_profile)
    end 

end