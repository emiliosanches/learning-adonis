'use strict'

class HomeController {
    index({ view }) {
        console.log('Accessed home')
        return view.render('home')
    }
}

module.exports = HomeController
