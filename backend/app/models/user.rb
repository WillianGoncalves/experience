class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include Devise::JWT::RevocationStrategies::JTIMatcher
  devise :database_authenticatable, :registerable, :confirmable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self

  ## Database authenticatable
  field :email,              type: String, default: ""
  field :encrypted_password, type: String, default: ""

  ## Recoverable
  field :reset_password_token,   type: String
  field :reset_password_sent_at, type: Time

  ## Confirmable
  field :confirmation_token,   type: String
  field :confirmed_at,         type: Time
  field :confirmation_sent_at, type: Time
  field :unconfirmed_email,    type: String # Only if using reconfirmable

  field :jti, type: String, default: ""

  # necessary to devise-jwt work with mongo
  def self.primary_key
    '_id'
  end

  # necessary to devise-jwt work with mongo
  def self.revoke_jwt(_payload, user)
    user.update_attribute(:jti, generate_jti)
  end
end
