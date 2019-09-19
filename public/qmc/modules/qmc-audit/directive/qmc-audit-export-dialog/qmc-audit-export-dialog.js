/*
* Directive to show a popup with the task chain for selected reload task
*/
define(
	[
		'./../../qmc-audit-module',
		"text!./qmc-audit-export-dialog.ng.html",
		"encoder"
	],
	function(qmcModule, template, encoder) {
		'use strict';

		qmcModule.directive("qmcAuditExportDialog", [
			function() {
				return {
					controller: [
						'$scope',
						'$element',
						'qmcTranslationService',
						function(
							$scope,
							$element,
							qmcTranslationService
						) {
							$scope.onCancel = function() {
								$scope.actionDefer.reject();
							};

							$scope.copyClipBoard = function() {
								document.getElementById('textExport').select();
								document.execCommand("copy");
							};
							$scope.auditFormats = [
								{ display: qmcTranslationService.translate('qmcAuditExportDialog.selectFormat.label'), type: '', head: '' },
								{ display: 'HTML', type: 'HTML', head: '<table>', start: '<tr><td class="usertextselect">', mid: '</td><td class="usertextselect">', end: '</td></tr>', foot: '</table>' },
								{ display: 'XML', type: 'XML', head: '<textarea id="textExport" class="text-display"><xml>', start: '<row><col>', mid: '</col><col>', end: '</col></row>\n', foot: '</xml></textarea>' },
								{ display: 'CSV', type: 'CSV', head: '<textarea id="textExport" class="text-display">', start: '"', mid: '","', end: '"\n', foot: '</textarea>' },
								{ display: 'JSON', type: 'JSON', head: '<textarea id="textExport" class="text-display">[', foot: ']</textarea>' }
							];
							$scope.audit = { format: $scope.auditFormats[0] };
							$scope.auditData = [];
							var userDict = {}, resourceDict = {};
							$scope.fullData = false;
							$scope.users.forEach(function(user) {
								user.userId = user.userId || '';
								user.name = user.name || '';
								user.userDirectory = user.userDirectory || '';
								userDict[user.id] = user;
							});
							$scope.resources.forEach(function(resource) {
								resource.name = resource.name || '';
								resourceDict[resource.id] = resource;
							});
							Object.keys($scope.gridDict).forEach(function(resourceId) {
								var row = $scope.gridDict[resourceId];
								Object.keys(row).forEach(function(userId) {
									var cell = row[userId];
									Object.keys(cell).forEach(function(action) {
										$scope.auditData.push([userId, resourceId, action]);
									});
								});
							});
							$scope.switchFullData = function() {
								$scope.fullData = !$scope.fullData;
								render();
							};
							$scope.chooseFormat = function() {
								render();
							};

							function render() {
								var html = $scope.audit.format.head;
								$scope.inProgress = true;
								if ($scope.audit.format.type !== '') {
									$scope.auditData.forEach(function(data) {
										if (data[2] in $scope.actions) {
											if ($scope.audit.format.type !== 'JSON') {
												var arr = [userDict[data[0]].name];
												arr.push.apply(arr, $scope.category === 'Sync' ? [] : [userDict[data[0]].userId, userDict[data[0]].userDirectory]);
												arr.push.apply(arr, [resourceDict[data[1]].name, data[2]]);
												arr.push.apply(arr, $scope.fullData ? [data[0], data[1]] : []);
												if ($scope.audit.format.type === 'CSV') {
													arr[0] = arr[0].replace(/"/g, '\\"').replace(/\n/g, '\\n');
													arr[1] = arr[1].replace(/"/g, '\\"').replace(/\n/g, '\\n');
													if ($scope.category !== 'Sync') {
														arr[2] = arr[2].replace(/"/g, '\\"').replace(/\n/g, '\\n');
														arr[3] = arr[3].replace(/"/g, '\\"').replace(/\n/g, '\\n');
													}
												}
												if ($scope.audit.format.type === 'HTML') {
													arr[0] = encoder.encodeForHTML(arr[0]);
													arr[1] = encoder.encodeForHTML(arr[1]);
													if ($scope.category !== 'Sync') {
														arr[2] = encoder.encodeForHTML(arr[2]);
														arr[3] = encoder.encodeForHTML(arr[3]);
													}
												}
												html += $scope.audit.format.start + arr.join($scope.audit.format.mid) + $scope.audit.format.end;
											} else {
												var obj = { resourceName: resourceDict[data[1]].name, action: data[2] };
												obj[$scope.category === 'Sync' ? 'nodeName' : 'userName'] = userDict[data[0]].name;
												if ($scope.category !== 'Sync') {
													obj.userId = userDict[data[0]].userId;
													obj.userDir = userDict[data[0]].userDirectory;
												}
												if ($scope.fullData) {
													obj[$scope.category === 'Sync' ? 'node' : 'user'] = data[0];
													obj.resource = data[0];
												}
												html += JSON.stringify(obj) + ',\n';
											}
										}
									});
									html = ($scope.audit.format.type === 'JSON' ? html.slice(0, -2) : html) + $scope.audit.format.foot;
								}
								$element.find("#qmcAuditExportDialog-dataDiv")[0].innerHTML = html;
								$scope.inProgress = false;
							}
						}
					],
					link: function(scope, element) {
						if (element.parent().length === 0) {
							element.appendTo('body');
						}
					},
					scope: {
						actionDefer: '=',
						gridDict: '=',
						users: '=',
						resources: '=',
						actions: '=',
						category: '='
					},
					restrict: 'E',
					template: template
				};
			}
		]);
	}
);
