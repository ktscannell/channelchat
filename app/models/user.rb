class User < ApplicationRecord
  attr_reader: :password

  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, allow_nil: true, length: { minimum: 6 }
end
