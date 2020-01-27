class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 403
    end
  end

  private

  def user_params
    self.params.require(:user).permit(:username, :password, :email)
  end
end
