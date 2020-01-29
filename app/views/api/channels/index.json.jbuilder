@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title
    json.messages []
    json.users []
  end
end