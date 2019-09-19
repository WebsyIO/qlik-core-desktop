define(
	[
		'text!./qmc-sync-rule-edit.ng.html'
	],
	function(template) {//TODO: ela: This doesnt seem to be used. Remove?
		'use strict';

		return {
			controller: [
				'$scope',
				'$routeParams',
				'qmcRoutingMessage',
				'qmcSelectionSetFactory',
				function qmcEditController(
					$scope,
					$routeParams,
					qmcRoutingMessage,
					qmcSelectionSetFactory
				) {
					$scope.selectionSet = qmcSelectionSetFactory('SystemRule', $routeParams.selectionSetId, false);
					$scope.editControl = {};
					$scope.inputData = {
						entity: 'None',
						selectionSet: $scope.selectionSet,
						category: 'Sync',
						pageTitle: $scope.detached ? null : 'qmcSyncRuleEdit.pageTitle',
						header: 'qmcSyncRuleEdit.stageHeading',
						headerIcon: 'icon-qmc-SyncRule',
						section: 'qmc-configure-system-section',
						updateMessageRef: 'qmcSyncRuleEdit.update.success.message',
						createMessageRef: 'qmcSyncRuleEdit.create.success.message',
						ruleTemplate: 'None',
						routeMessage: qmcRoutingMessage
					};
				}
			],
			template: template
		};
	}
);
