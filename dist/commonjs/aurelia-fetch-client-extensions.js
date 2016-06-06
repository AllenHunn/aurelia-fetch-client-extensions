'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AureliaFetchExtensions = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _aureliaFetchClient = require('aurelia-fetch-client');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AureliaFetchExtensions = exports.AureliaFetchExtensions = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function AureliaFetchExtensions() {
        _classCallCheck(this, AureliaFetchExtensions);
    }

    AureliaFetchExtensions.constructor = function constructor(HttpClient) {
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
    };

    return AureliaFetchExtensions;
}()) || _class);