Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'

  resources :patients, only:[:show, :create, :update]

  resources :users, only:[:show] do
    resources :patients, only:[:show, :create, :update]
  end

  # API for React
  namespace :api, defaults: { format: :json} do
    namespace :v1 do
      resources :users, only:[] do
        resources :patients, only:[:show]do
          resources :bodies, only:[ :show, :create, :update]
        end
      end
    end
  end
end
