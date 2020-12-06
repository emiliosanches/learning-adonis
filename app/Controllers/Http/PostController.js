'use strict'

const fs = require('fs');
const path = require('path');

class PostController {
    index({ view }) {
        const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', '..', 'database.json')));

        return view.render('posts', { posts: data });
    }

    async create({ request, response }) {
        const reqData = request.only(['title', 'body']);

        const databaseData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', '..', 'database.json')));

        databaseData.push(reqData);

        fs.writeFileSync(path.resolve(__dirname, '..', '..', '..', 'database.json'), JSON.stringify(databaseData));

        response.redirect('/posts', false)
    }
}

module.exports = PostController
