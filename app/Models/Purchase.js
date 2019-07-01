'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Purchase extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }
    item () {
        return this.hasOne('App/Models/Item')
    }
}

module.exports = Purchase
