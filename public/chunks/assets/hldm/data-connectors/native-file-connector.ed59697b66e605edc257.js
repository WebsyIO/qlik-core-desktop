/*!
 * sense-client@6.105.4
 * 
 * Copyright(C) 2019 Qlik International AB
 * All Rights Reserved
 * 
 */
(window["qJsonp"]=window["qJsonp"]||[]).push([[27],{1298:function(e,t,n){"use strict";var i,o;!(i=[n(1472),n(118),n(117),n(416),n(91),n(89),n(998),n(294),n(1087),n(996),n(1007),n(1228),n(1229),n(1230)],o=function(e,t,n,i,o,a,l,r,s,c,d){return{template:e,scope:{title:"=",serverside:"=",continueWithNewConnection:"=",qvDialogContext:"=",qvxSelectedEntrypoint:"=",dataconnectorInstance:"=",storageProvider:"=",pathModel:"=",startPath:"=",allFileConnections:"=",canBrowseAll:"="},controller:["$scope","$timeout",function(e,f){var p=true;var h="";function u(){e.pathModel||(e.pathModel={path:"",id:void 0});e.dataconnectorInstance&&"qix-datafiles.exe"===e.dataconnectorInstance.type.provider?e.activeDatafilesService=d:e.activeDatafilesService=c;p=true;e.qvDialogContext.title=o.get("scripteditor.dataconnectors.filechooser.title");e.qvDialogContext.nextDisabled=w;e.qvDialogContext.size="S";if(e.storageProvider){e.isLoading=true;e.storageProvider.updateConnection(e.dataconnectorInstance,e.serverside);e.storageProvider.getDirectoryInfo(e.currentCredentials,e.pathModel.path,e.pathModel.id).then(function(t){e.isLoading=false;C(e.storageProvider.name,t)})}e.fileFilters=i.getFileFilters();e.isLoading=false;if(e.startPath){e.pathModel.path=e.startPath;e.startPath=null}e.validpath=true;e.hideRootPlaceholderInPath=!e.dataconnectorInstance;e.rootPlaceholderName=e.dataconnectorInstance?"<"+e.dataconnectorInstance.name+">":"";e.invalidPathDefaultMessage=o.get("scripteditor.dataconnectors.fileconnect.illegalpath");e.invalidPathLabel=e.invalidPathDefaultMessage;e.selectedFileFilter=e.fileFilters[0];x();e.canBrowseAll&&v().then(function(t){e.drives=t})}l.setNewBackStyle();u();e.canUpload=function(){return e.activeDatafilesService.isFileUploadEnabled(e.dataconnectorInstance)};e.canDelete=function(){return e.activeDatafilesService.isFileUploadEnabled(e.dataconnectorInstance)};e.onDeleteFile=function(t){return e.activeDatafilesService.deleteFile(t.id).then(function(){g()},function(){console.log("failed to delete")})};e.onFileUpload=function(t){g();e.selectedFileName=t.name;t.name&&f(e.qvDialogContext.next)};e.onClickDrive=function(t){e.pathModel.path=t};e.onClickShortcut=function(t){e.dataconnectorInstance=t.connectorInstance;e.pathModel.path="";u();m()};e.returnToHome=function(){e.pathModel.path="";e.dataconnectorInstance=null;u()};e.onConnectionChnaged=function(t){e.dataconnectorInstance=t.connectorInstance;e.pathModel.path="";u();m()};function v(){return n.global.getLogicalDriveStrings().then(function(e){return l.postProcessDriveListing(e.qDrives,true).filter(function(e){return!e.disabled})})}function g(){if(e.activeDatafilesService.isDatafilesConnection(e.dataconnectorInstance))b();else if(e.storageProvider){if(p)return;var t=e.folderitems.filter(function(t){return t.path===e.pathModel.path})[0];t&&(e.pathModel.id=t.id);e.isLoading=true;e.storageProvider.getDirectoryInfo(e.currentCredentials,e.pathModel.path,e.pathModel.id).then(function(t){e.isLoading=false;C(e.storageProvider.name,t)})}else e.pathModel&&m(e.pathModel)}function m(){if(e.pathModel&&"undefined"===typeof e.pathModel.path||!e.selectedFileFilter)return;e.folderitems=[];e.isLoading=true;e.noBackButton=false;function i(t){e.folderitems=l.postProcessDirectoryListing(e.pathModel.path,t.qFolderItems,e.selectedFileFilter.regexps,false);q(true);e.isLoading=false;M()}function o(t){t.isHandled=true;q(false,t.code);e.isLoading=false;M();e.folderitems=l.postProcessDirectoryListing(e.pathModel.path,[],e.selectedFileFilter.regexps,false)}if(D()&&p&&!F(e.pathModel.path))I().then(function(t){e.pathModel.path=t.lastPath?t.lastPath:t.myDocs.qFolder;return n.global.getFolderItemsForPath(e.pathModel.path).then(i,function(t){q(true);e.isLoading=false;e.folderitems=l.postProcessDirectoryListing(e.pathModel.path,t.qFolderItems,e.selectedFileFilter.regexps,e.noBackButton);M()},function(){e.isLoading=false})});else if(D())n.global.getLogicalDriveStrings().then(function(t){e.isLoading=false;e.folderitems=l.postProcessDriveListing(t.qDrives);q(true)},function(){e.isLoading=false});else{e.dataconnectorInstance?e.activeDatafilesService.isDatafilesConnection(e.dataconnectorInstance)?b():n.currentApp.getFolderItemsForConnection({qConnectionId:e.dataconnectorInstance.id,qRelativePath:t.removeSurroundingSlashes(e.pathModel.path)}).then(i,o):e.canBrowseAll?n.global.getFolderItemsForPath(e.pathModel.path).then(i,o):e.isLoading=false;p=false}}function C(t,n){e.folderitems=[];e.noBackButton=""===e.pathModel.path;e.currentLocation=n.location?n.location:"";e.folderitems=l.postProcessStorageProviderDirectoryListing(e.pathModel.path,n.folders,n.files,e.selectedFileFilter.regexps,e.noBackButton);p=false}function F(e){return e===h}function x(){if(e.qvxSelectedEntrypoint)for(var t=0;t<e.fileFilters.length;t++)if(e.fileFilters[t].title===e.qvxSelectedEntrypoint.id){e.selectedFileFilter=e.fileFilters[t];break}}function q(t,n){e.validpath=t;e.invalidPathLabel=n?o.get("ErrorCode."+n):e.invalidPathDefaultMessage}function D(){return!e.dataconnectorInstance&&""===e.pathModel.path&&e.canBrowseAll}function M(){e.validFilePathName=P(e.selectedFileName)}function L(){e.activeDatafilesService.getFolderInfo("",e.pathModel&&e.pathModel.path||"",e.dataconnectorInstance).then(function(t){if(t){e.availableSpace=t.maxSize-t.size;e.folderSize=t.size;e.maxFolderSize=t.maxSize;e.maxFileSize=t.maxFileSize;e.allowedExtensions=t.allowedExtensions}})}function b(){e.isLoading=true;L();e.activeDatafilesService.listFolder("",e.pathModel&&e.pathModel.path||"",e.dataconnectorInstance).then(function(t){e.folderitems=l.postProcessDatafilesListing(e.path,t,e.selectedFileFilter.regexps);q(true);e.isLoading=false;M()})}e.$watch("pathModel.path + selectedFileFilter.title",function(){g()});e.$watch("selectedFileName",function(){M()});e.onFileClicked=function(t,n){e.selectedFileName=n;f(e.qvDialogContext.next)};e.filePathName=function n(){return e.pathModel.path?t.combinePath(e.pathModel.path,e.selectedFileName):e.selectedFileName};function P(t){return e.folderitems&&e.folderitems.some(function(e){return!!e.isFile&&e.name===t})}function I(){return a.all({myDocs:n.global.getMyDocumentsFolder()})}e.qvDialogContext.next=function(){w()||(e.dataconnectorInstance?e.continueWithNewConnection({pathName:e.pathModel.path,connectionName:e.dataconnectorInstance.name,singleFileName:t.removeSurroundingSlashes(e.filePathName()),usingExisting:true}):s.createConnector(r.getServersideConnectorProxy(),e.filePathName()).then(function(t){t&&e.continueWithNewConnection({pathName:e.pathModel.path,connectionName:t.name,singleFileName:e.selectedFileName,usingExisting:t.existedPreviously})}))};function S(){e.destroyComponent();e.deferredResult.reject()}e.onEscape=S;e.onCancelClicked=S;function w(){return!e.validFilePathName}}]}}.apply(t,i),void 0!==o&&(e.exports=o))},1299:function(e,t,n){"use strict";var i,o;!(i=[n(1476),n(1157),n(91)],o=function(e,t,n){return{template:e,scope:{qvDialogContext:"=",dataconnectionSelectionEditor:"=",connectionInput:"=",dataconnectorInstance:"=",qvInternals:"=",tableModelToEdit:"="},controller:["$scope","qvAlertDialog",function(e,i){e.dataHasLoaded=false;t.createNativeFileProvider(e.dataconnectorInstance,e.dataconnectionSelectionEditor,e.connectionInput,e.tableModelToEdit,false).then(function(t){e.qvDialogContext.size="L";e.qvDialogContext.title=e.tableModelToEdit?n.get("quickdataload.EditSelectionsFor",e.tableModelToEdit.data.tableName):n.get("scripteditor.dataconnectors.dialog.titlewithname",t.selectOptions.selectFromTitleName);e.provider=t;e.dataHasLoaded=true},function(t){var o,a,l;t.isHandled=true;if(e.tableModelToEdit&&e.tableModelToEdit.data&&e.tableModelToEdit.data.databaseName){o="quickdataload.EditSelections.FileNoLongerExistsHeader";a=e.tableModelToEdit.data.databaseName;l="quickdataload.EditSelections.FileNoLongerExistsContent"}else{o="ErrorDialog.Title";l="ErrorCode."+t.code}i.show({title:n.get(o,a),message:n.get(l),okLabel:n.get("Common.Close")}).closed.then(function(){e.qvDialogContext.back()});return false})}]}}.apply(t,i),void 0!==o&&(e.exports=o))},1472:function(e,t){e.exports='<div class="native-file-connector-container flatfilechoosercontainer">\n\t<qv-spinner class="spinner" show="isLoading" show-delay="200" show-for-at-least="500" spinner-height="200px" spinner-width="200px" center-in-parent="true"></qv-spinner>\n\t<main class="dm-main" tid="hdlm-file-select">\n\t\t<div class="text" q-translation="scripteditor.dataconnectors.fileconnect.path"></div>\n\t\t<div class="path-row">\n\t\t\t<qv-file-path-input  path="pathModel.path" hover-path="currentHoverPath" isvalidpath="validpath" root-placeholder="rootPlaceholderName" hide-root-placeholder-in-path="hideRootPlaceholderInPath"></qv-file-path-input>\n\t\t</div>\n\t\t<p class="illegalpath" ng-class="{visible: !validpath }">{{invalidPathLabel}}</p>\n\t\t<qv-file-browser-home  ng-show="pathModel.path === \'\' && !dataconnectorInstance" connections="allFileConnections" drives="drives" on-click-shortcut="onClickShortcut" on-click-drive="onClickDrive"></qv-file-browser-home>\n\t\t<qv-file-browser-widget hide-back="noBackButton" ng-show="pathModel.path || dataconnectorInstance" can-delete="canDelete()" on-delete-file="onDeleteFile(file)" on-dbl-click="qvDialogContext.next()" return-to-home="returnToHome" path="pathModel.path" hover-path="currentHoverPath" folderitems="folderitems" selected-file-name="selectedFileName" on-file-clicked="onFileClicked(path, name)"></qv-file-browser-widget>\n\t\t<div class="text qs-ft" q-translation="scripteditor.flatfilechooser.filetype"></div>\n\t\t<lui-select class="filetype" x-model="selectedFileFilter" x-options="option.title|translate for option in fileFilters"></lui-select>\n\t\t<qv-file-upload-widget ng-if="dataconnectorInstance && canUpload()" on-file-upload="onFileUpload(file)" dataconnector-instance="dataconnectorInstance" folderitems="folderitems"\n\t\t\t\t\t\t\t\tavailable-space="availableSpace" max-file-size="maxFileSize" folder-size="folderSize" max-folder-size="maxFolderSize" allowed-extensions="allowedExtensions"></qv-file-upload-widget>\n\t\t</qv-file-upload>\n\t</main>\n</div>\n'},1476:function(e,t){e.exports='<div class="native-file-connector-select">\n\t<qv-generic-select-dialog ng-if="dataHasLoaded" data-provider="provider"\n\t\t\t\t\t\t\t  data-dataconnection-selection-editor="dataconnectionSelectionEditor"\n\t\t\t\t\t\t\t  data-qv-dialog-context="qvDialogContext"\n\t\t\t\t\t\t\t  data-qv-internals="qvInternals">\n\t</qv-generic-select-dialog>\n\t<qv-spinner class="spinner" show="!dataHasLoaded" show-delay="200" show-for-at-least="500" spinner-height="200px" spinner-width="200px" center-in-parent="true"></qv-spinner>\n</div>\n'},1485:function(e,t,n){"use strict";var i,o;!(i=[n(1733),n(1231),n(2020)],o=function(e,t,n){return{connectDialog:e,selectDialog:t,connectorMain:n}}.apply(t,i),void 0!==o&&(e.exports=o))},1486:function(e,t,n){"use strict";var i,o;!(i=[n(1733),n(1231),n(2021)],o=function(e,t,n){return{connectDialog:e,selectDialog:t,connectorMain:n}}.apply(t,i),void 0!==o&&(e.exports=o))},1733:function(e,t,n){"use strict";var i,o;!(i=[n(2019),n(118),n(117),n(91),n(998)],o=function(e,t,n,i,o){return{template:e,controller:["$scope","serverside","input",function(e,a,l){var r="";e.rootPlaceholderName=i.get("scripteditor.dataconnectors.fileconnect.virtual_folder_computer");e.validpath=false;e.isEdit=l.editMode;e.id=l.instanceId;e.nameChangedAtLeastOnce=false;e.isAddMode=true;e.invalidPathDefaultMessage=i.get("scripteditor.dataconnectors.fileconnect.illegalpath");e.maxConnectionNameLength=t.MAX_CONNECTION_NAME_LENGTH-a.getUsernameSuffix().length;function s(){e.invalidPathLabel=e.invalidPathDefaultMessage;if(e.isEdit){e.isLoading=true;a.getConnection(e.id).then(function(t){e.isLoading=false;e.name=t.qConnection.qName;e.path=t.qConnection.qConnectionString})}else n.global.getMyDocumentsFolder().then(function(t){e.path=t.qFolder;e.isLoading=false})}function c(t){e.folderitems=[];e.isLoading=true;t===r?n.global.getLogicalDriveStrings().then(function(t){e.isLoading=false;e.folderitems=o.postProcessDriveListing(t.qDrives);d(true)},function(){e.isLoading=false}):n.global.getFolderItemsForPath(t).then(function(n){e.isLoading=false;e.folderitems=o.postProcessDirectoryListing(t,n.qFolderItems);d(true)},function(n){n.isHandled=true;e.isLoading=false;d(false,n.code);e.folderitems=o.postProcessDirectoryListing(t,[])})}function d(t,n){e.validpath=t;e.invalidPathLabel=n?i.get("ErrorCode."+n):e.invalidPathDefaultMessage}e.$watch("path",function(t){if("\\"===t||""===t){t=r;e.path=t}if("undefined"!==typeof t){e.path=t;c(t)}});e.isNameInvalid=function(){return e.name?!t.isValidConnectionName(e.name):e.nameChangedAtLeastOnce};function f(){return e.path&&e.validpath&&e.path.length<=256}e.$watch("name",function(){e.showCreateConnectionError=false;if(""!==e.name&&e.isNameInvalid()){e.errorContent=i.get("Common.InvalidCharacters");e.showCreateConnectionError=true}});e.isOkDisabled=function(){return!t.isValidConnectionName(e.name)||!f()};e.onNameChanged=function(){e.nameChangedAtLeastOnce=true};e.handleErrors=function(t){e.errorContent=a.getErrorContent(t);e.showCreateConnectionError=true;t.isHandled=true;e.isLoading=false};e.onOKClicked=function(){if(!e.isOkDisabled()){var n=t.formatDirectoryPathForEngine(e.path);e.isLoading=true;e.isEdit?a.modifyConnection(e.id,e.name,n,e.connectorType.provider,false,"","").then(function(t){e.isLoading=false;t&&e.destroyComponent()},e.handleErrors):a.createNewRawConnection(e.name,n,"folder").then(function(t){e.isLoading=false;t&&e.destroyComponent()},e.handleErrors)}};e.onCancelClicked=function(){e.isLoading||e.destroyComponent()};s()}]}}.apply(t,i),void 0!==o&&(e.exports=o))},2019:function(e,t){e.exports='<div class="qui-modalbackground fileconnectdialogcontainer">\n\t<div class="qui-delayedModal" qv-global-escape="onCancelClicked()" qv-global-enter="onOKClicked()">\n\t\t<div class="loading-screen" ng-show="isLoading">\n\t\t\t<div class="qv-loader"></div>\n\t\t</div>\n\t\t<header class="dm-header" q-translation="{{isEdit ? \'scripteditor.dataconnectors.fileconnect.edittitle\' : \'scripteditor.dataconnectors.fileconnect.title\'}}"></header>\n\t\t<main class="dm-main">\n\t\t\t<div class="text" q-translation="scripteditor.dataconnectors.fileconnect.path"></div>\n\t\t\t<qv-file-path-input path="path" hover-path="currentHoverPath" isvalidpath="validpath" root-placeholder="rootPlaceholderName" hide-root-placeholder-in-path=\'true\'></qv-file-path-input>\n\t\t\t<p class="illegalpath" ng-style="{visibility: !validpath && \'visible\' || \'hidden\'}">{{invalidPathLabel}}</p>\n\t\t\t<qv-file-browser-widget hover-path="currentHoverPath" path="path" is-add-mode="isAddMode" folderitems="folderitems"></qv-file-browser-widget>\n\t\t\t<div class="text" q-translation="Common.Name"></div>\n\t\t\t<input class="lui-input name" ng-model="name" maxlength="{{maxConnectionNameLength}}" ng-change="onNameChanged()" invalid="{{isNameInvalid()}}"/>\n\t\t\t<label ng-style="{visibility: showCreateConnectionError && \'visible\' || \'hidden\'}" class="errorlabel">{{errorContent}}</label>\n\n\t\t\t<div>{{info}}</div>\n\t\t</main>\n\t\t<footer class="dm-footer">\n\t\t\t<lui-button x-variant="inverse" ng-click="$event.preventDefault(); onCancelClicked()" q-translation="Common.Cancel" tid=\'2e6845\'></lui-button>\n\t\t\t<lui-button x-variant="inverse" id="confirmButton" ng-click="$event.preventDefault(); onOKClicked()" ng-disabled="isOkDisabled()" q-translation="{{isEdit ? \'Common.Save\' : \'Common.Create\'}}"></lui-button>\n\t\t</footer>\n\t</div>\n</div>\n'},2020:function(e,t,n){"use strict";var i,o;!(i=[n(1298),n(1299),n(416),n(91)],o=function(e,t,n,i){function o(e){switch(e){case"scripteditor.flatfilechooser.files.excel":case"scripteditor.flatfilechooser.files.delimited":case"scripteditor.flatfilechooser.files.all":case"scripteditor.flatfilechooser.files.qvd":case"scripteditor.flatfilechooser.files.qvx":return true;default:return false}}function a(){var a=n.getFileFilters().filter(function(e){return o(e.title)}).map(function(t){return{id:t.title,category:"file",name:i.get(t.titleShort),initialConnectStep:e}}).sort(function(e){return"scripteditor.flatfilechooser.files.all"===e.id?-1:1});function l(){return t}function r(){return t}var s={entrypoints:a,getInitialSelectStep:l,getInitialFileDropStep:r};return s}return{create:a}}.apply(t,i),void 0!==o&&(e.exports=o))},2021:function(e,t,n){"use strict";var i,o;!(i=[n(1298),n(1299),n(416),n(91)],o=function(e,t,n,i){function o(e){switch(e){case"scripteditor.flatfilechooser.files.excel":case"scripteditor.flatfilechooser.files.delimited":case"scripteditor.flatfilechooser.files.all":case"scripteditor.flatfilechooser.files.qvd":case"scripteditor.flatfilechooser.files.qvx":return true;default:return false}}function a(){var a=n.getFileFilters().filter(function(e){return o(e.title)}).map(function(t){return{id:t.title,category:"file",name:i.get(t.titleShort),initialConnectStep:e}}).sort(function(e){return"scripteditor.flatfilechooser.files.all"===e.id?-1:1});function l(){return"load-file"}function r(){return t}function s(){return t}var c={getBoxType:l,entrypoints:a,getInitialSelectStep:r,getInitialFileDropStep:s};return c}return{create:a}}.apply(t,i),void 0!==o&&(e.exports=o))}}]);