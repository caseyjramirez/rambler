Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :industries, only: [:index, :create]
      resources :cities, only: [:index, :create]
      resources :walks, only: [:index, :create]
      resources :postings, only: [:index, :create]
      resources :users, only: [:index]
    
      # custom routes
      post '/login', to: 'users#login'
      get '/unfilledPostings', to: 'postings#unfilled'

      delete '/logout', to: 'users#logout'
      get '/authorize_user', to:'users#show'
    end
  end
end
