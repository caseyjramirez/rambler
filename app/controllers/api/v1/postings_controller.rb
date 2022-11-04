class Api::V1::PostingsController < ApplicationController

    def index
        postings = Posting.all
        render json: postings, status: :ok
    end

end
