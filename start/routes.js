'use strict'



const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords','ForgotPasswordController.store').validator('ForgotPasswprd')
Route.put('passwords','ForgotPasswordController.update').validator('ResetPassword')

Route.get('/files/:id', 'FileController.show')

Route.group(()=>{
    Route.post('/files', 'FileController.store')

    Route.post('/purchase', 'PurchaseController.store').validator('Purchase')
    
    Route.resource('items','ItemController').apiOnly().validator(new Map([
        [['items.store'], ['StoreItem']],
        [['items.update'], ['UpdateItem']],
        [['items.index'], ['IndexItem']],
        [['items.show'],['ShowItem']]
      ]))

    Route.resource('categories','CategoryController').apiOnly()
}).middleware(['auth'])
