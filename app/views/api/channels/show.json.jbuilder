json.channel do
  # json.extract! @channel, :id, :title, :description, :message_ids
  json.partial! 'api/channels/channel', channel: @channel
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      # json.extract! message, :id, :body, :author_id, :channel_id
      json.partial! 'api/messages/message', message: message
    end
  end
end

json.users do
  @channel.messages.each do |message|
    author = message.author
    json.set! author.id do
      # json.extract! author, :id, :username
      json.partial! 'api/users/user', user: author
    end
  end
end