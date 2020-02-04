class ChannelsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    user = User.find(params[:user])
    stream_for user
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
