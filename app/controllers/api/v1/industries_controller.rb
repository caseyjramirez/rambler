class Api::V1::IndustriesController < ApplicationController
    skip_before_action :authorized_user, only: [:index]

    def index
        industries = Industry.all
        render json: industries, status: :ok
    end

    def create
        industry = Industry.create!(city_params)
        render json: industry, status: :created
    end

    private
    def industry_params
        params.permit(:name)
    end 
end
