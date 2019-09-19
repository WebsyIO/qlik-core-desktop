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

app.get('/single', function(req, res){
  res.sendFile(__dirname+'/public/single.html');
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
	res.send(`{"data":[{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b","attributes":{"name":"me","userId":"me","userDirectory":"Personal","privileges":["create","read","update","delete","changerole"]}}],"links":{"self":"/user/info/"}}`)
})

app.get('/api/hub/v1/desktoplink', (req, res) => {
	res.send(`{"links":{"self":"/desktoplink/"},"data":[{"id":null,"type":"desktoplink","attributes":{"magicLinkHostUri":"","magicLinkFriendlyName":""}}]}`)
})

app.get('/api/hub/v1/apps/user', (req, res) => {
	res.send(`{"data":[{"type":"App","id":"64f6c35b-ae73-4adb-881c-1ed5f5e0e0ce","attributes":{"fileSize":1504732,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"Executive Dashboard","privileges":["create","read","update","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2016-06-13T18:47:30.171Z","createdDate":"2019-02-18T02:11:28.227Z","publishTime":"2019-02-20T17:32:32.998Z","published":true,"description":"Executive Dashboard is for senior managers to monitor performance within their business, giving them both a high level view as well as the ability to drill down into the granular details of the business. In this example, the organization manufactures fast moving consumables, using a reseller model to distribute its products across multiple regions.","dynamicColor":"hsla(356,18%,43%,1)","thumbnail":"/appcontent/64f6c35b-ae73-4adb-881c-1ed5f5e0e0ce/thumb-executive_dashboard.png","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":{"type":"Stream","id":"aaec8d41-5201-43ab-809f-3063750dfafd"}}}},{"type":"App","id":"9828e6d3-fffb-4312-a18e-60104412eb07","attributes":{"fileSize":11609079,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"Sales Discovery","privileges":["create","read","update","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2016-06-14T14:40:01.222Z","createdDate":"2019-02-17T20:04:04.504Z","publishTime":"2019-02-18T01:18:10.793Z","published":true,"description":"This application contains consumer goods sales data. Using the uniqueness of Qlik Sense, Associative Analysis, you will be able to analyze sales information from different angles and create your own charts","dynamicColor":"hsla(210,18%,43%,1)","thumbnail":"/appcontent/9828e6d3-fffb-4312-a18e-60104412eb07/thumb-sales_discovery.png","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":{"type":"Stream","id":"aaec8d41-5201-43ab-809f-3063750dfafd"}}}},{"type":"App","id":"2ac05ea1-d30c-4f82-b5a7-6a63ab8b6cd9","attributes":{"fileSize":597588,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"Helpdesk Management","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2016-06-14T17:54:28.488Z","createdDate":"2019-09-19T11:51:56.984Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"This application holds the data of tickets that are submitted by internal employees to the IT department. It includes when a computer needs to be upgraded or a mobile phone does not work. Each ticket is assigned to an IT resource, but an IT manager, s/he needs to be aware which tickets came in as a high priority, or which tickets have not been assigned to any resources yet.","dynamicColor":"","thumbnail":"/appcontent/2ac05ea1-d30c-4f82-b5a7-6a63ab8b6cd9/helpdesk_management.jpg","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"67584705-209a-4079-8037-c5811cb805cb","attributes":{"fileSize":56499343,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"Flight Data","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2019-04-01T14:46:44.238Z","createdDate":"2019-04-01T14:44:25.621Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"f60b2183-2d2f-45ca-950a-2504cc02bfb5","attributes":{"fileSize":147163,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"ChangeTest","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2019-09-18T13:00:21.781Z","createdDate":"2019-09-18T12:56:02.975Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"b38a230a-3380-4e9f-9ca1-26682bc53cc0","attributes":{"fileSize":597441,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"Helpdesk Management","privileges":["create","read","update","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2016-06-14T17:54:28.488Z","createdDate":"2019-02-18T02:11:41.322Z","publishTime":"2019-02-20T17:32:26.026Z","published":true,"description":"This application holds the data of tickets that are submitted by internal employees to the IT department. It includes when a computer needs to be upgraded or a mobile phone does not work. Each ticket is assigned to an IT resource, but an IT manager, s/he needs to be aware which tickets came in as a high priority, or which tickets have not been assigned to any resources yet.","dynamicColor":"","thumbnail":"/appcontent/b38a230a-3380-4e9f-9ca1-26682bc53cc0/helpdesk_management.jpg","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":{"type":"Stream","id":"aaec8d41-5201-43ab-809f-3063750dfafd"}}}},{"type":"App","id":"4e6b53f2-c450-4993-afc5-8bdc02fbc0a5","attributes":{"fileSize":11605665,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"9828e6d3-fffb-4312-a18e-60104412eb07","name":"Sales Discovery(1)","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2016-06-14T14:40:01.222Z","createdDate":"2019-05-20T16:52:20.598Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"This application contains consumer goods sales data. Using the uniqueness of Qlik Sense, Associative Analysis, you will be able to analyze sales information from different angles and create your own charts","dynamicColor":"hsla(210,18%,43%,1)","thumbnail":"/appcontent/4e6b53f2-c450-4993-afc5-8bdc02fbc0a5/thumb-sales_discovery.png","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"8367a4c9-aeac-4b8c-9441-b19e636b6b65","attributes":{"fileSize":439185,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"WBY Sales","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2019-03-14T09:37:21.146Z","createdDate":"2019-05-28T11:17:08.848Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"641c77e9-f3b6-40af-9cef-02782e8267d1","attributes":{"fileSize":371020,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"Tech Dashboard Model","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2019-06-18T01:58:59.674Z","createdDate":"2019-06-20T13:38:42.663Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"5fb179a5-a66b-4fc9-b3bc-92e268d48b01","attributes":{"fileSize":21734445,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"GD_Aktis_1_NW","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2019-06-27T15:23:30.529Z","createdDate":"2019-07-02T09:22:01.895Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"Aktis Development App 1","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"c6e863e8-9430-47f7-9b45-118d81e3a8be","attributes":{"fileSize":139752,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"a","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"1753-01-01T00:00:00.000Z","createdDate":"2019-09-16T09:00:23.611Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"81f64128-3298-4129-b3f0-68228f17d05e","attributes":{"fileSize":139754,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"b","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"1753-01-01T00:00:00.000Z","createdDate":"2019-09-16T09:06:19.333Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"8028317e-d18b-41c0-a06c-5db30f408904","attributes":{"fileSize":139752,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"c","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"1753-01-01T00:00:00.000Z","createdDate":"2019-09-16T09:06:36.457Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"7658b963-baf2-4866-b2ff-37015cb97647","attributes":{"fileSize":35544437,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"_Template Dashboard vNext (Rosslyn Demo Dynamic)","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2018-06-19T16:03:22.332Z","createdDate":"2019-09-16T12:44:04.582Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"hsla(197,18%,43%,1)","thumbnail":"/appcontent/7658b963-baf2-4866-b2ff-37015cb97647/Rosslyn%20Analytics%20Logo.png","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}},{"type":"App","id":"8864cf11-5948-4ec7-bac2-2759a58185b1","attributes":{"fileSize":227428,"sourceAppId":"00000000-0000-0000-0000-000000000000","targetAppId":"00000000-0000-0000-0000-000000000000","name":"Tech Dashboard Model v0.15.2-RBW","privileges":["create","read","update","delete","publish","exportdata","offlineaccess","duplicate"],"lastReloadTime":"2019-09-14T16:07:16.242Z","createdDate":"2019-09-16T12:45:08.644Z","publishTime":"1753-01-01T00:00:00.000Z","published":false,"description":"","dynamicColor":"","thumbnail":"","availabilityStatus":1,"features":["openWithoutData","publish","republish","unpublish","move","manageProperties"],"customProperties":[]},"relationships":{"owner":{"data":{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b"}},"stream":{"data":null}}}],"included":[{"type":"User","id":"7b13f7d5-97dd-4502-9ab5-1a3ffae7f07b","attributes":{"name":"sense","userId":"sense","userDirectory":"MYSERVER","privileges":null}},{"type":"Stream","id":"aaec8d41-5201-43ab-809f-3063750dfafd","attributes":{"name":"Everyone","privileges":null}}]}`)
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
	res.send(`{"userDirectory": "Personal", "userId": "me", "userName": "me", "logoutUri": "http://10.211.55.3/qps/user"}`)
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
