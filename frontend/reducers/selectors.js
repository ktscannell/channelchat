export const selectAllChannels = state => (
  Object.values(state.entities.channels)
);

export const selectChannelMessages = (state, channel) => {
  return channel ? channel.message_ids.map(id => state.entities.messages[id]) : [];
};