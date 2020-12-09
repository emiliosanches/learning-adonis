'use strict'

const Post = use('App/Models/Post');
class PostController {
    async index({ request, view }) {
        const query = request.get();

        const pageNumber = query?.p || 1;

        const posts = await Post.query().orderBy('created_at', 'desc').paginate(pageNumber, 5);
        console.log(posts)
        return view.render('posts', { posts });
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
