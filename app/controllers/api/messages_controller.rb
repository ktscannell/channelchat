class Api::MessagesController < ApplicationController
  def create
    @message = current_user.messages.new(message_params)
    if @message.save
      # this is where I will use action cable
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    self.params.require(:message).permit(:body, :channel_id)
  end
end