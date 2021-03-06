'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'HomeController.index');
Route.get('/posts', 'PostController.index').as('posts');
Route.post('/posts/create', 'PostController.create').as('create-post');

Route.group(function () {
    Route.get('/posts', 'PostController.indexApi');
    Route.post('/posts/create', 'PostController.createApi');
    Route.get('/posts/:id', 'PostController.getApi');
}).prefix('/api/v1');
