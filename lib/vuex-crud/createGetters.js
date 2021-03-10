"use strict";

exports.__esModule = true;
/**
 * Create default getters and merge them with getters defined by a user.
 */
var createGetters = function createGetters() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      getters = _ref.getters;

  return Object.assign({}, {
    /**
     * Return array of resources.
     */
    list: function list(state) {
      return state.list.map(function (id) {
        return state.entities[id.toString()];
      });
    },
    page: function page(state) {
      return function () {
        var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
        return state.list.slice((Math.abs(pageNumber) - 1) * Math.abs(pageSize), Math.abs(pageNumber) * Math.abs(pageSize)).map(function (id) {
          return state.entities[id.toString()];
        });
      };
    },
    total: function total(state) {
      return state.total || state.list.length;
    },


    /**
     * Get resource by id.
     */
    byId: function byId(state) {
      return function (id) {
        return state.entities[id.toString()];
      };
    },


    /**
     * Return true if there is a logged error.
     */
    isError: function isError(state) {
      return state.fetchListError !== null || state.fetchSingleError !== null || state.createError !== null || state.updateError !== null || state.replaceError !== null || state.replaceListError !== null || state.destroyError !== null;
    },


    /**
     * Return true if there is a ongoing request.
     */
    isLoading: function isLoading(state) {
      return state.isFetchingList || state.isFetchingSingle || state.isCreating || state.isUpdating || state.isReplacing || state.isReplacingList || state.isDestroying;
    }
  }, getters);
};

exports.default = createGetters;