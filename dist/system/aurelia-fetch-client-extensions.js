'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, json, _dec, _class, Fetch;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
            json = _aureliaFetchClient.json;
        }],
        execute: function () {
            _export('Fetch', Fetch = (_dec = inject(HttpClient), _dec(_class = function () {
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
            }()) || _class));

            _export('Fetch', Fetch);
        }
    };
});