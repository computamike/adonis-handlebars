'use strict'

const { Command } = require('@adonisjs/ace')

class MakeHandlebar extends Command {
  static get signature () {
    return 'make:handlebar'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for make:handlebar command')
  }
}

module.exports = MakeHandlebar
