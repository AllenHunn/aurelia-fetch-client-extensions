var _dec, _class;

import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

export let AureliaFetchExtensions = (_dec = inject(HttpClient), _dec(_class = class AureliaFetchExtensions {
    static constructor(HttpClient) {
        HttpClient.prototype.get = function (id = '/') {
            return this.fetch('/' + id);
        };

        HttpClient.prototype.getJson = function (id) {
            return this.fetch('/' + id).then(response => response.json());
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
}) || _class);