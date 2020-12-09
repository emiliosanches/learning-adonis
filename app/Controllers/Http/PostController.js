'use strict'

const Post = use('App/Models/Post');
class PostController {
    async index({ view }) {
        
        const posts = await Post.all();

        return view.render('posts', { posts: posts.rows });
    }

    async indexApi({ response }) {
        response.type('application/json');

        const posts = await Post.all();

        return posts.rows;
    }

    async create({ request, response }) {
        const reqData = request.only(['title', 'body']);

        const post = new Post();

        post.title = reqData.title;
        post.body = reqData.body;

        await post.save();

        response.redirect('/posts', false)
    }

    async createApi({ request, response }) {
        const reqData = request.only(['title', 'body']);

        const post = new Post();

        post.title = reqData.title;
        post.body = reqData.body;

        await post.save();

        response.created();
    }

    async getApi({ params, response }) {
        const post = await Post.find(params.id);

        response.type('application/json');

        return post;
    }
}

module.exports = PostController
