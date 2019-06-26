/* eslint-disable no-unused-vars */
'use strict'

const Item = use('App/Models/Item')



/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with items
 */
class ItemController {
  /**
   * Show a list of all items.
   * GET items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request}) {
    const { page } = request.get()

    const items = await Item.query().with('user').paginate(page)

    return items
  }

  /**
   * Render a form to be used for creating a new item.
   * GET items/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
 

  /**
   * Create/save a new item.
   * POST items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['user_id','name','quantity','category_id','value','tipo','file_id',])

    const item = await Item.create({...data, user_id: auth.user.id})

    return item
  }

  /**
   * Display a single item.
   * GET items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params}) {
    const item = await Item.findOrFail(params.id)

    await item.load('user')
    await item.load('category')
    await item.load('file')



    return item
  }

  /**
   * Render a form to update an existing item.
   * GET items/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
 

  /**
   * Update item details.
   * PUT or PATCH items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request}) {
    const item = await Item.findOrFail(params.id)
    const data = request.only(['user_id','name','quantity','category_id','value','tipo','file_id',])

    item.merge(data)

    await item.save()

    return item
  }

  /**
   * Delete a item with id.
   * DELETE items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const item = await Item.findOrFail(params.id)

    await item.delete()
  }
}

module.exports = ItemController
