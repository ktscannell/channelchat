@channels.reject { |channel| channel.direct }.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title, :description, :direct
    json.message_ids []
    json.member_ids []
    # json.partial! 'api/channels/channel', channel: channel
  end
end

@channels.select { |channel| channel.direct }.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :description, :direct
    json.title channel.generate_direct_chat_title(current_user)
    json.message_ids []
    json.member_ids []
  end
end