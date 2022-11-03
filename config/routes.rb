Rails.application.routes.draw do
  resources :walks, only: [:index]
  resources :postings, only: [:index]
  resources :users, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/hello', to: 'application#hello_world'

  # Defines the root path route ("/")
  # root "articles#index"
end
