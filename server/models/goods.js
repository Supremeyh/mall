
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
  "productId": String,
  "productName": { type: String },
  "salePrice": Number,
  "productImage": String
})


// module.exports = mongoose.model('Good', productSchema)
module.exports = mongoose.model('Good', productSchema, 'goods') // 若mongodb的collection为good,不是goods