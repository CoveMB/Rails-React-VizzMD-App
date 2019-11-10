Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'

  resources :patients, only:[:create]

  resources :users, only:[:show] do
    resources :patients, only:[:create, :update] do
      resources :bodies, only:[ :index, :show, :new ]
    end
  end

  # API for React
  namespace :api, defaults: { format: :json} do
    namespace :v1 do
      resources :users, only:[] do
        resources :patients, only:[:show]do
          resources :bodies, only:[ :create, :update ]
        end
      end
    end
  end
end
