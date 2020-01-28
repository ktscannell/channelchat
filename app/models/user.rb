class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, allow_nil: true, length: { minimum: 6 }

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    user = self.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end
  
  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
