var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')

var Goods = require('../models/goods')

// 连接mongodb数据库
// mongoose.connect('mongodb://root:aa123456@127.0.0.1:27017/mall')
mongoose.connect('mongodb://127.0.0.1:27017/mall')

// 监听
mongoose.connection.on('connected', function() {
  console.log('mongoose connected')
})

mongoose.connection.on('error', function() {
  console.log('mongoose connected fail')
})

mongoose.connection.on('disconnected', function() {
  console.log('mongoose connected disconnected')
})



router.get('/', function(req, res, next) {
  Goods.find({}, function(err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })

  res.send('goods list')
  // res.render('index', {title: 'title'})
})


module.exports = router