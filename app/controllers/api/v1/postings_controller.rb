class Api::V1::PostingsController < ApplicationController

    def index
        postings = Posting.all
        render json: postings, status: :ok
    end

    def unfilled
        postings = Posting.where(isFilled: false)
        render json: postings, status: :ok
    end

    def create
        posting = Posting.create!(posting_params)
        render json: posting, status: :created
    end

    private

    def posting_params
        params.permit(:distance, :date, :location, :user_id, :isFilled)
    end 

end
