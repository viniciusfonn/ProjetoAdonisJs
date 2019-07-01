'use strict'
const Antl = use('Antl')

class ShowItem {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      // validation rules
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ShowItem
