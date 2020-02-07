class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels.includes(:members)
    # Using below for time being
    # @channels = Channel.all
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
    
    channel = Channel.new
    # Using this for testing only
    # channel = User.first.channels.new
    # testing end
    channel.direct = true
    channel.save
    current_user.channels << channel
    member_ids = params[:channel][:member_ids]
    # Add each new member to the direct channel
    member_ids.each do |member_id|
      member = User.find(member_id)
      channel.members << member
    end
  
    if channel.valid?
      # make a members hash to send down to the client to go into state
      members_hash = {}
      channel.members.each do |member|
        members_hash[member.id] = { id: member.id, username: member.username }
      end

      # make a channel hash to send to the client to go into state
      member_ids_array = channel.members.map(&:id)
      channel_hash = {
        id: channel.id,
        title: nil,
        description: 'null',
        direct: true,
        message_ids: [],
        member_ids: member_ids_array
      }
      
      channel.members.each do |member|
        channel_hash[:title] = channel.generate_direct_chat_title(member)
        ChannelsChannel.broadcast_to(
          member,
          members: members_hash,
          channel: channel_hash
        )
      end
      render json: channel.id
    else
      render json: channel.errors.full_messages, status: 422
    end
  end

  # private 

  # def channel_params
  #   self.params.require(:channel).permit(:member_ids)
  # end
end
