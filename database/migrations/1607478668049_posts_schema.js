'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title', 64).notNullable()
      table.string('body', 512).notNullable()
      table.timestamps('created_at')
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
