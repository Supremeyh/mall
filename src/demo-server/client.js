let http = require('http')
let util = require('util')

let testUrl1 = 'http://www.wanfangdata.com.cn/resource_nav/getResources.do?r=0.6236625895902377'
// let testUrl2 = 'https://www.imooc.com/lecturer/ajaxrecteache'
http.get(testUrl1, function(res) {
  let data = ''
  res.on('data', function(chunk) {
    data += chunk
  })

  res.on('end', function() {
    let result = JSON.parse(data)

    console.log(`${util.inspect(result)}`)
  })
})