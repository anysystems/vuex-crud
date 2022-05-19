export default {
  successResponse: {},

  errorResponse: {},

  isSuccessful: true,

  defaultPromise() {
    const promise = new Promise(function executor(resolve, reject) {
      if (this.isSuccessful) resolve(this.successResponse);
      else reject(this.errorResponse);
    });

    return promise;
  },

  get() {
    return this.defaultPromise();
  },

  post() {
    return this.defaultPromise();
  },

  patch() {
    return this.defaultPromise();
  },

  put() {
    return this.defaultPromise();
  },

  delete() {
    return this.defaultPromise();
  }
};
