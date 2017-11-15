'use strict'

var express=require('express'),
	app=express(),
	http=require('http').createServer(app),
	io=require('socket.io')(http),
	port=process.env.PORT || 3000,
	publicDir=express.static(`${__dirname}/public}`)
	
app
	.use(publicDir)
	.get('/', (req, res) => {

		res.sendFile(`${__dirname}/public/index.html`)
	})


http.listen(port, ()=>{
	console.log("iniciando express y socket.io en  localhost:%d", port )
})