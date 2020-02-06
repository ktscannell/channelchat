export const fetchAllChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels'
  })
);

export const fetchSingleChannel = (channelId) => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}`
  })
);

export const createDirectMessage = (channel) => (
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel }
  })
);