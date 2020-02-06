export const selectAllChannels = state => (
  Object.values(state.entities.channels).filter(channel => !channel.direct)
);

export const selectAllDirectChannels = state => (
  Object.values(state.entities.channels).filter(channel => channel.direct)
);

export const selectChannelMessages = (state, channel) => {
  // debugger;
  return channel ? channel.message_ids.map(id => state.entities.messages[id]) : [];
};

export const selectCurrentChannel = (state, id) => {
  const channels = state.entities.channels;
  if (Object.keys(channels).length > 0) {
    return state.entities.channels[id];
  } else {
    return null;
  }
}