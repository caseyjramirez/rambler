class Api::V1::WalksController < ApplicationController

    def index
        walks = Walk.all
        render json: walks, status: :ok
    end

    def create
        posting = Posting.find_by_id(params[:posting_id])
        posting.update(isFilled: true)

        walk = Walk.create!(walk_params)
        render json: walk, status: :created
    end

    def destroy
        activity = Walk.find(params[:id])
        
        if activity[:user_one_id] === params[:user_id] or activity[:user_two_id] === params[:user_id]
            activity.destroy
        end
        
        head :no_content 
    end 



    private

    def walk_params
        params.permit(:distance, :location, :date, :user_one_id, :user_two_id, :activity_id)
    end 

end
