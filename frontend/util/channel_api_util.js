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