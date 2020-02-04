class Api::MessagesController < ApplicationController
  def create
    message = current_user.authored_messages.new(message_params)
    room = Channel.find(message_params[:channel_id])
    if message.save
      
      message_hash = {
        author_id: message.author_id,
        body: message.body,
        id: message.id,
        channel_id: message.channel_id
      }
      
      author = message.author
      user_hash = {
        id: author.id,
        username: author.username
      }

      MessagesChannel.broadcast_to( 
        room, 
        message: message_hash,
        author: user_hash
      )
      head :ok
    else
      render json: message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    self.params.require(:message).permit(:body, :channel_id)
  end
end
