"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Create default getters and merge them with getters defined by a user.
 */

/* global state */
/* eslint no-undef: "error" */

var createGetters = function createGetters() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      getters = _ref.getters;

  var result = _extends({
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
     * Get resource by guid.
     */
    byGuid: function byGuid(state) {
      return function (guid) {
        return Object.values(state.entities).find(function (e) {
          return e.guid === guid;
        });
      };
    },


    /**
     * Get resource by attribute.
     */
    byAttribute: function byAttribute() {
      return function (attribute, value) {
        return Object.values(state.entities).find(function (e) {
          return e[attribute] === value;
        });
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
  return result;
};

exports.default = createGetters;