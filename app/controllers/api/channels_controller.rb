class Api::ChannelsController < ApplicationController
  def index
    # @channels = current_user.channels
    # Using below for time being
    @channels = Channel
  end

  def show
    @channel = Channel.includes(messages: :author).find_by(id: params[:id])
    if @channel
      render :show
    else
      render json: ['not found'], status: 404
    end
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    self.params.require(:channel).permit(:title, :description)
  end
end
