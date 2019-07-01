/* eslint-disable no-unused-vars */
'use strict'
const Purchase = use('App/Models/Purchase')
const Item = use('App/Models/Item')



/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with purchases
 */
class PurchaseController {
  /**
   * Show a list of all purchases.
   * GET purchases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new purchase.
   * GET purchases/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new purchase.
   * POST purchases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request,response,auth }) {
    const data = request.only(['item_id','quantity'])
    const item = await Item.findOrFail(data.item_id)
    // if(data.quantity > item.quantity && data.quantity != 0) return response.send('oi')
    const purchase = await Purchase.create({...data, user_id: auth.user.id,value: item.value})


    item.quantity = item.quantity - data.quantity

    await item.save();

    

    return purchase
  }

  /**
   * Display a single purchase.
   * GET purchases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing purchase.
   * GET purchases/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update purchase details.
   * PUT or PATCH purchases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a purchase with id.
   * DELETE purchases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PurchaseController
