json.channel do
  json.extract! @channel, :id, :title, :description, :message_ids
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :author_id, :channel_id
    end
  end
end