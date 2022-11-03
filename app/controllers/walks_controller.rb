class WalksController < ApplicationController

    def index
        walks = Walk.all
        render json: walks, status: :ok
    end

end
