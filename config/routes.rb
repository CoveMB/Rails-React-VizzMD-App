Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'

  resources :patients, only:[:create]

  resources :users, only:[:show] do
    resources :patients, only:[:show, :create] do
      resources :bodies, only:[ :index, :show ]
    end
  end

  # API for React
  namespace :api, defaults: { format: :json} do
    namespace :v1 do
      resources :users, only:[] do
        resources :patients, only:[:show]do
          resources :bodies, only:[ :create ]
        end
      end
    end
  end
end
