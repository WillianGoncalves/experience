class Users::SessionsController < Devise::SessionsController
  # fix undefined method respond_to on sign_out
  include ActionController::MimeResponds

  respond_to :json
end
