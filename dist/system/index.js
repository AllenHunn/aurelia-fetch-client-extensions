'use strict';

System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            function configure(config) {
                config.globalResources('./aurelia-fetch-client');
            }

            _export('configure', configure);
        }
    };
});