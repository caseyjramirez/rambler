class Api::V1::ActivitiesController < ApplicationController
    def index
        activities = Activity.all
        render json: activities, status: :ok
    end
end
