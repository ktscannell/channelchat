export const selectAllChannels = state => (
  Object.values(state.entities.channels)
);