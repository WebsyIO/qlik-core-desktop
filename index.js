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
	res.send({"accept-language": "en-GB,en;q=0.9,es;q=0.8,en-US;q=0.7"})
})

app.get('/sense/api/about/v1/language', (req, res) => {
	res.send({"accept-language": "en-GB,en;q=0.9,es;q=0.8,en-US;q=0.7"})
})

app.get('/api/capability/v1/list', (req, res) => {
	res.send(`[{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"basic-publishing","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"CAO","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"CLIENT_METRICS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"self-publishing","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"app-properties","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"CAO_ENABLE_PUBLISHED","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"CE_PRECEDENTS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"INSIGHT_LIGHT_EDITING","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"preview-privileges","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"SPA","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"GEO_BACKGROUND_WMS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"SELECTION_INSIGHTS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"GEO_BACKGROUND_IMAGE","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"REBRAND2018","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"SINGLE_CONFIG","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"BDI_CONNECTOR","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"DROP_ZONES","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"DUPLICATE_SHEET_BUTTON","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"GEO_SIZE_LEGEND","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"QMC_EXCESS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"SYSTEM_NOTIFICATIONS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"GEO_EXPLORATION_MENU","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"BARCHART","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"HAS_QRS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"THEME_CARDS","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"BC_XAXIS_MODE","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"BC_STYLE_EDITOR","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"CONTAINER_OBJECT","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"MOBILE_GRID","enabled":true},{"contentHash":"10159d595f5fa3bd250e90f30b1b7bf3","originalClassName":"FeatureToggle","flag":"INSIGHT_BOT","enabled":true}]`)
})

app.get('/sense/api/v0/features', (req, res) => {
	res.send(`{"basic-publishing":true,"CAO":true,"CLIENT_METRICS":true,"self-publishing":true,"app-properties":true,"CAO_ENABLE_PUBLISHED":true,"CE_PRECEDENTS":true,"INSIGHT_LIGHT_EDITING":true,"preview-privileges":true,"SPA":true,"GEO_BACKGROUND_WMS":true,"SELECTION_INSIGHTS":true,"GEO_BACKGROUND_IMAGE":true,"REBRAND2018":true,"SINGLE_CONFIG":true,"BDI_CONNECTOR":true,"DROP_ZONES":true,"DUPLICATE_SHEET_BUTTON":true,"GEO_SIZE_LEGEND":true,"QMC_EXCESS":true,"SYSTEM_NOTIFICATIONS":true,"GEO_EXPLORATION_MENU":true,"BARCHART":true,"HAS_QRS":true,"THEME_CARDS":true,"BC_XAXIS_MODE":true,"BC_STYLE_EDITOR":true,"CONTAINER_OBJECT":true,"MOBILE_GRID":true,"INSIGHT_BOT":true}`)
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
	res.send(`{"data":[{"type":"Stream","id":"aaec8d41-5201-43ab-809f-3063750dfafd","attributes":{"name":"Everyone","modifiedDate":"2019-02-17T19:27:46.064Z","privileges":["read","publish"]},"relationships":{"owner":{"data":{"type":"User","id":"f6719273-4220-49a3-8f3e-05bd9658df4e"}}}},{"type":"Stream","id":"a70ca8a5-1d59-4cc9-b5fa-6e207978dcaf","attributes":{"name":"Monitoring apps","modifiedDate":"2019-02-17T19:27:46.064Z","privileges":["read","publish"]},"relationships":{"owner":{"data":{"type":"User","id":"f6719273-4220-49a3-8f3e-05bd9658df4e"}}}},{"type":"Stream","id":"52528380-f56e-47ba-a908-daa848f18005","attributes":{"name":"Context","modifiedDate":"2019-09-03T12:56:51.085Z","privileges":["read","update","delete","publish"]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}}}}],"included":[{"type":"User","id":"f6719273-4220-49a3-8f3e-05bd9658df4e","attributes":{"name":"sa_repository","userId":"sa_repository","userDirectory":"INTERNAL","privileges":null}},{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b","attributes":{"name":"sense","userId":"sense","userDirectory":"MYSERVER","privileges":null}}]}`)
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
					}
						"qvVersion": "25.15.2.0"
				}
			}]
		}
	`)
})

const server = http.createServer(app)
const wsServer = new WebSocket.Server({server})

wsServer.on('connection', (ws, req) => {
	console.log(req.url);
	let clientOpen = false
	let wsQueue = []
	const wsClient = new WebSocket(`ws://10.211.55.3/${req.url}`)
	wsClient.onopen = function () {
		clientOpen = true
		console.log('queue', wsQueue);
		for (let i = 0; i < wsQueue.length; i++) {
			wsClient.send(wsQueue[i])
		}
	}
	wsClient.onerror = function (err) {
		console.log(err);
	}
	wsClient.onclose = function () {
		console.log('closed');
	}
	wsClient.onmessage = function (event) {
		console.log('from qlik', event.data);
		ws.send(event.data)
	}

	ws.on('message', message => {
		console.log('from client', message);
		if (clientOpen === false) {
			wsQueue.push(message)
		}
		else {
			wsClient.send(message)
		}
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
