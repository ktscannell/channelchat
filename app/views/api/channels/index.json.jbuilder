@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title, :description
    json.message_ids []
    json.member_ids []
    # json.partial! 'api/channels/channel', channel: channel
  end
end