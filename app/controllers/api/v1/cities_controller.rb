class Api::V1::CitiesController < ApplicationController
    def index
        cities = City.all
        render json: cities, status: :ok
    end

    def create
        city = City.create!(city_params)
        render json: city, status: :created
    end

    private
    def city_params
        params.permit(:name, :label)
    end 

end
