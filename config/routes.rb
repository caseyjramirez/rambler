Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :activities, only: [:index]
      resources :messages, only: [:index, :create]
      resources :industries, only: [:index, :create]
      resources :cities, only: [:index, :create]
      resources :walks, only: [:index, :create, :destroy]
      resources :postings, only: [:index, :create]
      resources :users, only: [:index, :show, :create, :update]
    
      # custom routes
      post '/login', to: 'users#login'
      delete '/logout', to: 'users#logout'
      get '/authorize_user', to:'users#auth_user'
      get '/get_user', to: 'users#getUser'
      post '/update_activity_goal', to: 'users#update_activity_goal'
      post '/set_complete_profile', to: 'users#set_complete_profile'
      patch '/set_activities_to_seen', to: 'walks#set_to_seen'
      get '/unfilledPostings', to: 'postings#unfilled'
      
    end
  end
end
