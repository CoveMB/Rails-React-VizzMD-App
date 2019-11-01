class PatientPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(user: user)
    end
  end

  def show?
    current_user_or_admin?
  end

  def update?
    current_user_or_admin?
  end

  def create?
    !user.nil?
  end

  def destroy?
    false
  end

  private

  def current_user_or_admin?
    record.user == user || user.admin
  end
end
