'use strict'

var Koa = require('koa');
var sha1 = require('sha1');
var config = {
	wechat:{
		appID:'wxfe7c867ed6afdb52',
		appSecret:'36b9f47fd0b6153362cf76112dd06bbc',
		token:'012138'
	}
}

var app = new Koa()

app.use(function *(next){
	console.log(this.query)

	// var token = config.wechat.token;
	// var signature = this.query.signature;
	// var nonce = this.query.nonce;
	// var timestamp = this.query.timestamp;
	// var ecostr = this.query.ecostr;

	// var str = [token,timestamp,nonce].sort().join('');
	// var sha = sha1(str);
	// if(sha === signature){
	// 	this.body = ecostr + '';
	// }
	// else {
	// 	this.body = 'wrong';
	// }
})

app.listen(1234);
console.log('Listening:1234');
