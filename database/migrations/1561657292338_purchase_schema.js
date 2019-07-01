'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
      table
        .integer('item_id')
        .unsigned()
        .references('id')
        .inTable('items')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')  
      table.integer('value').notNullable()
      table.integer('quantity').notNullable() 
      table.timestamps()
    })
  }

  down () {
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema
