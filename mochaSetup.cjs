const { JSDOM }  = require('jsdom');

const { window } = new JSDOM('<div id="app"></div>', {
    url: 'https://localhost:5173'
});

global.window = window;
global.document = window.document;
global.FormData = window.FormData;
global.DocumentFragment = window.DocumentFragment;
global.AbortController = window.AbortController;

require.extensions['.scss'] = function () {
    module.exports = () => ({});
}
require.extensions['.svg'] = function () {
    module.exports = () => '';
}
