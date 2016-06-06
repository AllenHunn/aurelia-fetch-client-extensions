'use strict';

System.register(['aurelia-fetch-client'], function (_export, _context) {
  "use strict";

  var HttpClient, json;
  return {
    setters: [function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
      json = _aureliaFetchClient.json;
    }],
    execute: function () {

      HttpClient.prototype.get = function () {
        var id = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];

        return this.fetch('/' + id);
      };

      HttpClient.prototype.getJson = function (id) {
        return this.fetch('/' + id).then(function (response) {
          return response.json();
        });
      };

      HttpClient.prototype.post = function (content) {
        return this.fetch('/', {
          method: 'post',
          body: json(content)
        });
      };

      HttpClient.prototype.put = function (id, content) {
        return this.fetch('/' + id, {
          method: 'put',
          body: json(content)
        });
      };

      HttpClient.prototype.delete = function (id) {
        return this.fetch('/' + id, {
          method: 'delete'
        });
      };
    }
  };
});