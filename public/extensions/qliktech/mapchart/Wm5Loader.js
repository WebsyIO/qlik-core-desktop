define({
    load: function (_name, requirejs, onload, config) {
        "use strict";

        if (config.isBuild) {
            onload();
            return;
        }
        requirejs(["./ErrorHandler", "axios", "url-util"], function (errorHandler, axios, UrlUtil) {
            errorHandler = errorHandler.default;

            // Set up global config object structure
            var idevio = window.idevio = window.idevio || {};
            idevio.Connection = idevio.Connection || {};
            idevio.Connection.delayedInit = idevio.Connection.delayedInit || [];

            function getMapConfig(callback) {
                function setDefaults(config) {
                    config = config || {};
                    config.serverUrl = config.serverUrl || "https://maps.qlikcloud.com";
                    config.serverKey = config.serverKey || "feb18-bxon0nKvbqJ8sn8";
                    idevio.Connection = idevio.Connection || {};
                    idevio.Connection.mapChart = config;
                    return config;
                }

                var url = UrlUtil.rootPath + "resources/assets/mapconf.json?" + new Date().getTime();
                axios.get(url, {
                    responseType   : 'json',
                    withCredentials: true, // enable CORS to pass through credentials to support mashups on a different domain calling this. (QLIK-84015)
                }).then(function(json) {
                    callback(setDefaults(json && json.data));
                }).catch(function() {
                    callback(setDefaults());   // no mapconf
                });
            }

            function loadCallback() {
                if (idevio.Connection.status === "FAILED") {
                    errorHandler.mapScriptFailed({ message: idevio.Connection.message || "Unknown error" });
                    onload.error({
                        title: "geo.error.WebMapInvalidKey",
                        specialTitleSet: true,
                        showRemove: false
                    });
                    requirejs(["./Wm5Local"]);
                } else {
                    if (window.onIdevioWebMapLoaded.src !== "mapchart") {
                        // Loaded by the extension - replace key with our own
                        getMapConfig(function (settings) {
                            idevio.Connection.key = settings.serverKey;
                            onload(idevio);
                        });
                    } else {
                        onload(idevio);
                    }
                }
            }

            if (!window.onIdevioWebMapLoaded) {
                loadCallback.src = "mapchart";
                window.onIdevioWebMapLoaded = window.onIdevioWebMapError = loadCallback;
            } else if (window.onIdevioWebMapLoaded.src !== "mapchart" && (!idevio.Connection || !idevio.Connection.status || idevio.Connection.status === "LOADING")) {
                // Onload callback belongs to someone else - use delayedInit to init callback instead
                idevio.Connection.delayedInit.push(function() {
                    // We need to make sure that we init after all maps have been added.
                    idevio.Connection.delayedInit.push(loadCallback);
                });
                return;
            }

            if (typeof idevio !== "undefined" && idevio.Connection && idevio.Connection.status) {
                if (idevio.Connection.status !== "LOADING") {
                    loadCallback();
                }
                return;
            }

            getMapConfig(function (settings) {
                var extras  = "tools,iconfactory,geojson,gml";

                // Give up after 10s s.t. it timing out does not also trigger a RJS timeout for Wm5Loader.
                var toutId = setTimeout(function() {
                    requirejs(["./Wm5Local"]);
                }, 10000);

                var loadLocalScript = function() {
                    clearTimeout(toutId);
                    requirejs(["./Wm5Local"]);
                };

                requirejs([
                    settings.serverUrl + "/ravegeo/webmap5/script/webmap.nocache.js?key=" + settings.serverKey + "&opt=" + extras
                ], function () {
                    if (!idevio.Connection.status) {
                        // script failed to run (initial script should always set status) -> initial script did not run
                        loadLocalScript();
                        return;
                    }

                    // only clear local script timer if the map script actually finishes loading
                    idevio.Connection.delayedInit.push(function() {
                        clearTimeout(toutId);
                    });
                }, function () {
                    loadLocalScript();
                });
            });
        });
    }
});
