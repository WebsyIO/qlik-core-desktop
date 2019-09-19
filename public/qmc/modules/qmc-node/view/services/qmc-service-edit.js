define(
	[
		'text!./qmc-node-edit.ng.html'
	],
	function(editView) {
		'use strict';
		return {
			controller: [
				'$scope',
				'$routeParams',
				'qmcRoutingMessage',
				'qmcSelectionSetFactory',
				'qmcPropertyEditService',
				function(
					$scope,
					$routeParams,
					qmcRoutingMessage,
					qmcSelectionSetFactory,
					qmcPropertyEditService
				) {
					$scope.selectionSet = qmcSelectionSetFactory('ServerNodeConfiguration', $routeParams.selectionSetId, false);
					$scope.qmcRoutingMessage = qmcRoutingMessage;
					$scope.config = qmcPropertyEditService.getConfig('ServerNodeConfiguration', './nodes', 'qmcNodeEdit.stageHeading', 'qmc-configure-system-section');
					$scope.config.associationHeading = 'qmcNodeEdit.associationHeading';
					$scope.navigationView = {};
				}
			],
			template: editView
		};
	}
);
