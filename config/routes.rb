Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :walks, only: [:index]
      resources :postings, only: [:index]
      resources :users, only: [:index]
    
      # custom routes
      post '/login', to: 'users#login'

      delete '/logout', to: 'users#logout'
      get '/authorize_user', to:'users#show'
    end
  end
end
