'use strict';
exports.main_handler = async (event, context, callback) => {
    const md = require('markdown-it')()
    let r = md.render(JSON.parse(event.body).text)
    callback(null, r)
    // return event
};