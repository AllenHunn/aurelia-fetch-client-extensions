var _dec, _class;

import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

export let Fetch = (_dec = inject(HttpClient), _dec(_class = class Fetch {

    constructor(HttpClient) {
        HttpClient.prototype.get = function (id = '/') {
            return this.fetch('/' + id);
        };

        HttpClient.prototype.getJson = function (id = '/') {
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

        this.HttpClient = HttpClient;
    }

    get(id = '/') {
        return this.HttpClient.get(id);
    }

    getJson(id = '/') {
        return this.HttpClient.getJson(id);
    }

    post(content) {
        return this.HttpClient.post(content);
    }

    put(id, content) {
        return this.HttpClient.put(id, content);
    }

    delete(id) {
        return this.HttpClient.delete(id);
    }
}) || _class);