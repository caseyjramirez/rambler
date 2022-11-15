Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :industries, only: [:index, :create]
      resources :cities, only: [:index, :create]
      resources :walks, only: [:index, :create]
      resources :postings, only: [:index, :create]
      resources :users, only: [:index, :create]
    
      # custom routes
      post '/login', to: 'users#login'
      delete '/logout', to: 'users#logout'
      get '/authorize_user', to:'users#show'
      get '/get_user', to: 'users#getUser'
      
      get '/unfilledPostings', to: 'postings#unfilled'
    end
  end
end
