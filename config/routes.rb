Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }

  root to: 'pages#home'

  resources :users, only:[:show] do
    resources :patients, only:[:show, :create, :update], as: 'patient' do
      resources :muscles, only:[:update]
      resources :traitments, only:[:create, :update] do
        resources :exercies, only:[:create, :update]
      end
    end
  end
end
