'use strict'
const Antl = use('Antl')

class StoreItem {
  get validateAll() {
    return true
  }
  get rules () {
    return {
      name: 'required',
      quantity: 'required',
      value: 'required',
      tipo: 'required'
      
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = StoreItem
