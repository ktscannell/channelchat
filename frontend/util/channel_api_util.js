export const fetchAllChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels'
  })
);