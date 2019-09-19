const express = require('express')
const app = express()
const WebSocket = require('ws')
const http = require('http')

app.get('/', (req, res) => {
	res.send('welcome to qlik core desktop')
})

app.use('/resources', express.static(__dirname+'/public'))

app.use('/sense/resources', express.static(__dirname+'/public'))

app.get('/hub', function(req, res){
  res.sendFile(__dirname+'/public/hub.html');
});

app.get('/sense/app/*', function(req, res){
  res.sendFile(__dirname+'/public/client.html');
});

app.get('/api/hub/about', (req, res) => {
	res.send(
		`
			{
				"links": {
					"self": "/about/"
				},
				"data": [{
					"version": {
						"full": "1.6.1",
						"major": "1",
						"minor": "6",
						"patch": "1"
					},
					"mode": "enterprise"
				}]
			}
		`
	)
})

app.get('/api/about/v1/language', (req, res) => {
	res.send([])
})

app.get('/api/capability/v1/list', (req, res) => {
	res.send([])
})

app.get('/api/hub/v1/user/info', (req, res) => {
	res.send(`{"data":[{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b","attributes":{"name":"sense","userId":"sense","userDirectory":"MYSERVER","privileges":["create","read","update","delete","changerole"]}}],"links":{"self":"/user/info/"}}`)
})

app.get('/api/hub/v1/desktoplink', (req, res) => {
	res.send(`{"links":{"self":"/desktoplink/"},"data":[{"id":null,"type":"desktoplink","attributes":{"magicLinkHostUri":"","magicLinkFriendlyName":""}}]}`)
})

app.get('/api/hub/v1/apps/user', (req, res) => {
	res.send(`{"data": []}`)
})

app.get('/api/hub/v1/streams', (req, res) => {
	res.send(`{"data": []}`)
})

app.get('/api/hub/v1/reports', (req, res) => {
	res.send(`{"data": []}`)
})

app.get('/api/hub/v1/qvdocuments', (req, res) => {
	res.send(`{"data": []}`)
})

app.get('/api/hub/v1/properties', (req, res) => {
	res.send(`{"data": []}`)
})

app.get('/qps/user', (req, res) => {
	res.send(`{"userDirectory": "MYSERVER", "userId": "sense", "userName": "sense", "logoutUri": "http://10.211.55.3/qps/user"}`)
})

app.get('/api/hub/v1/privileges', (req, res) => {
	res.send(`
		{
			"links": {
				"self": "/privileges/"
			},
			"data": [{
				"id": null,
				"type": "privileges",
				"attributes": {
					"definition": {
						"features": ["sidemenu", "search", "notifications", "canSortAppByCreatedDate", "canSortAppByPublishedDate", "qpsUserInfo", "canCreateDuplicateAppNames", "canShowPublishedSection", "login", "desktopLink", "canCreateApp"],
						"app": ["openWithoutData", "publish", "republish", "unpublish", "move", "manageProperties"],
						"stream": [],
						"override": {},
						"schemas": [],
						"routes": [],
						"installation": "enterprise",
						"qvVersion": "25.15.2.0"
					}
				}
			}]
		}
	`)
})

const server = http.createServer(app)
const wsServer = new WebSocket.Server({server})


wsServer.on('connection', (ws, req) => {
	console.log(req.url);
	wsServer.ws = ws
	ws.on('message', message => {
		console.log('message', message)
		ws.send(`thanks for the message ${message}`)
	})
	ws.on('uncaughtException', err => {
		console.log('uncaught error', err)
	})
	ws.on('error', err => {
		console.log('error', err)
	})
	ws.on('close', () => {
		console.log('ws closed')
	})
})

server.listen(8000, () => {
	console.log(`listening on port ${process.env.PORT || 8000}`)
})
