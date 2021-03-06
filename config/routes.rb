Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :create]
    resources :messages, only: [:create]
  end

  root "static_pages#root"

  mount ActionCable.server => '/cable'
end
