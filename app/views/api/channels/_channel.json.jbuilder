json.extract! channel, :id, :description, :direct, :message_ids, :member_ids
if channel.direct
  json.title channel.generate_direct_chat_title(current_user)
else
  json.title channel.title
end