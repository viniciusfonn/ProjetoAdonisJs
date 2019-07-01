'use strict'
const Antl = use('Antl')

class UpdateItem {
  get validateAll() {
    return true
  }
  get rules () {
    return {
      name: 'required',
      quantity: 'required|to_int',
      value: 'required|to_int',
      tipo: 'required'
      
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = UpdateItem
