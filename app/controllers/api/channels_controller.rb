class Api::ChannelsController < ApplicationController
  def index
    # @channels = current_user.channels
    # Using below for time being
    @channels = Channel.all
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
    # for now, this is always a new direct message 'channel'
    # so it has no title or description
    channel = current_user.channels.new
    member_ids = JSON.parse(channel_params[:member_ids])
    
    if member_ids.length >= 1
      # Add each new member to the direct channel
      member_ids.each do |member_id|
        member = User.find(member_id)
        channel.members << member
      end

      members_list = channel.members.map do |member|
        { id: member.id, username: member.username }
      end

      channel.members.each do |member|
        ChannelsChannel.broadcast_to(
          member,
          members: members_list.to_json
        )
      end
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private 

  def channel_params
    self.params.require(:channel).permit(:member_ids)
  end
end
