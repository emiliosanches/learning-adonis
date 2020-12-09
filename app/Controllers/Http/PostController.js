'use strict'

const Post = use('App/Models/Post');
class PostController {
    async index({ view }) {
        
        const posts = await Post.all();

        return view.render('posts', { posts: posts.rows });
    }

    async create({ request, response }) {
        const reqData = request.only(['title', 'body']);

        const post = new Post();

        post.title = reqData.title;
        post.body = reqData.body;

        await post.save();

        response.redirect('/posts', false)
    }
}

module.exports = PostController
