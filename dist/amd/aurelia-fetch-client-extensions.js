define(['aurelia-fetch-client'], function (_aureliaFetchClient) {
  'use strict';

  _aureliaFetchClient.HttpClient.prototype.get = function () {
    var id = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];

    return this.fetch('/' + id);
  };

  _aureliaFetchClient.HttpClient.prototype.getJson = function (id) {
    return this.fetch('/' + id).then(function (response) {
      return response.json();
    });
  };

  _aureliaFetchClient.HttpClient.prototype.post = function (content) {
    return this.fetch('/', {
      method: 'post',
      body: (0, _aureliaFetchClient.json)(content)
    });
  };

  _aureliaFetchClient.HttpClient.prototype.put = function (id, content) {
    return this.fetch('/' + id, {
      method: 'put',
      body: (0, _aureliaFetchClient.json)(content)
    });
  };

  _aureliaFetchClient.HttpClient.prototype.delete = function (id) {
    return this.fetch('/' + id, {
      method: 'delete'
    });
  };
});