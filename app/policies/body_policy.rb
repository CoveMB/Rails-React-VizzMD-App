class BodyPolicy < ApplicationPolicy
  class Scope < Scope
  end

  def index?
    current_user_or_admin?
  end

  def show?
    current_user_or_admin?
  end

  def update?
    current_user_or_admin?
  end

  def destroy?
    current_user_or_admin?
  end

  private

  def current_user_or_admin?
    true
  end
end
