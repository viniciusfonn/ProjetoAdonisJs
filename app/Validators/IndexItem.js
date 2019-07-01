'use strict'
const Antl = use('Antl')

class IndexItem {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = IndexItem
