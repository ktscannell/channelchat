# json.partial 'api/messages/message', message: @message
json.extract! @message, :id, :body, :author_id, :channel_id