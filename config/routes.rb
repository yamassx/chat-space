Rails.application.routes.draw do
  devise_for :users
  root  "groups#index"
  resources :users, only: [:edit, :update, :show]
  resources :groups, except: [:show, :destroy] do
    resources :messages, only: [:index, :create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

# , only: [:index, :new, :create, :edit, :update]