export const createMessage = (message) => (
  $.ajax({
    url: 'api/messages',
    method: 'POST',
    data: message
  })
);