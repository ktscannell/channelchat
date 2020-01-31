@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title
    json.message_ids []
    json.user_ids []
  end
end