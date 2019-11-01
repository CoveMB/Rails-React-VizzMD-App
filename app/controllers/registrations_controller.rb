class RegistrationsController < Devise::RegistrationsController
  private

  def after_sign_in_path_for(resource)
    user_path(resource)
  end

  def after_update_path_for(resource)
    user_path(resource)
  end
end
