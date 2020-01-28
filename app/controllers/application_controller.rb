class ApplicationController < ActionController::Base
  # this is for testing
  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in?

  private
  
  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil;
  end

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end
end
