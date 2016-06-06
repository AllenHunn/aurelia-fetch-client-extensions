define(['exports', 'aurelia-framework', 'aurelia-fetch-client'], function (exports, _aureliaFramework, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Fetch = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Fetch = exports.Fetch = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
        function Fetch(HttpClient) {
            _classCallCheck(this, Fetch);

            HttpClient.prototype.get = function () {
                var id = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];

                return this.fetch('/' + id);
            };

            HttpClient.prototype.getJson = function () {
                var id = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];

                return this.fetch('/' + id).then(function (response) {
                    return response.json();
                });
            };

            HttpClient.prototype.post = function (content) {
                return this.fetch('/', {
                    method: 'post',
                    body: (0, _aureliaFetchClient.json)(content)
                });
            };

            HttpClient.prototype.put = function (id, content) {
                return this.fetch('/' + id, {
                    method: 'put',
                    body: (0, _aureliaFetchClient.json)(content)
                });
            };

            HttpClient.prototype.delete = function (id) {
                return this.fetch('/' + id, {
                    method: 'delete'
                });
            };

            this.HttpClient = HttpClient;
        }

        Fetch.prototype.get = function get() {
            var id = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];

            return this.HttpClient.get(id);
        };

        Fetch.prototype.getJson = function getJson() {
            var id = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];

            return this.HttpClient.getJson(id);
        };

        Fetch.prototype.post = function post(content) {
            return this.HttpClient.post(content);
        };

        Fetch.prototype.put = function put(id, content) {
            return this.HttpClient.put(id, content);
        };

        Fetch.prototype.delete = function _delete(id) {
            return this.HttpClient.delete(id);
        };

        return Fetch;
    }()) || _class);
});