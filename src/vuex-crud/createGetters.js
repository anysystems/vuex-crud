/**
 * Create default getters and merge them with getters defined by a user.
 */
const createGetters = ({ getters } = {}) =>
  Object.assign(
    {},
    {
      /**
       * Return array of resources.
       */
      list(state) {
        return state.list.map((id) => state.entities[id.toString()]);
      },

      page(state) {
        return (pageNumber = 1, pageSize = 15) =>
          state.list
            .slice((Math.abs(pageNumber) - 1) * Math.abs(pageSize), Math.abs(pageNumber) * Math.abs(pageSize))
            .map((id) => state.entities[id.toString()]);
      },

      total(state) {
        return state.total || state.list.length;
      },

      /**
       * Get resource by id.
       */
      byId(state) {
        return (id) => state.entities[id.toString()];
      },

      /**
       * Get resource by guid.
       */
      byGuid(state) {
        return (guid) => state.entities.find((e) => e.guid == guid);
      },

      /**
       * Get resource by attribute.
       */
      byAttribute() {
        return (attribute, value) => state.entities.find((e) => e[attribute] == value);
      },

      /**
       * Return true if there is a logged error.
       */
      isError(state) {
        return (
          state.fetchListError !== null ||
          state.fetchSingleError !== null ||
          state.createError !== null ||
          state.updateError !== null ||
          state.replaceError !== null ||
          state.replaceListError !== null ||
          state.destroyError !== null
        );
      },

      /**
       * Return true if there is a ongoing request.
       */
      isLoading(state) {
        return (
          state.isFetchingList ||
          state.isFetchingSingle ||
          state.isCreating ||
          state.isUpdating ||
          state.isReplacing ||
          state.isReplacingList ||
          state.isDestroying
        );
      },
    },
    getters
  );

export default createGetters;
