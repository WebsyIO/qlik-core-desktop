var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "jquery", "translator", "autogenerated/qix/engine-enums", "objects/adapters/calc-cond-adapter", "objects.error-handling/error-translation", "./MapStandardErrors"], function (require, exports, jquery_1, translator_1, engine_enums_1, calc_cond_adapter_1, error_translation_1, MapStandardErrors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    translator_1 = __importDefault(translator_1);
    engine_enums_1 = __importDefault(engine_enums_1);
    calc_cond_adapter_1 = __importDefault(calc_cond_adapter_1);
    error_translation_1 = __importDefault(error_translation_1);
    MapStandardErrors_1 = __importDefault(MapStandardErrors_1);
    /**
     * Contains logic for handling and displaying erros and warnigns that the user need to be aware of.
     * It work with defined errors in MapStandardErrors. The type of error decieds how it should be displayed for the user.
     * To be able to work it need to be associated with a MapChart that it use to display the errors on.
     */
    var ErrorHandler = /** @class */ (function () {
        function ErrorHandler(mapChart) {
            var _this = this;
            this.ready = false;
            this.mapChart = mapChart;
            this.errorDiv = jquery_1.default(".map-error-div", mapChart.parentDiv).attr("id", "mapErrordiv-" + mapChart.id);
            this.contentDiv = jquery_1.default(".map-error-content-div", this.errorDiv);
            this.iconDiv = jquery_1.default(".map-error-icon-div", this.errorDiv);
            this.errorDiv.click(function () {
                _this.contentDiv.slideToggle("fast");
            });
            this.errorQueue = [];
        }
        /*
         * Use to toggle if the Map is ready to display errors or not
         */
        ErrorHandler.prototype.setMapReady = function (ready) {
            this.ready = ready;
            if (ready && this.errorQueue.length > 0) {
                this.showErrors();
            }
        };
        ErrorHandler.prototype.onStateChange = function () {
            if (this.mapChart.extensionObject.inEditState()) {
                this.showErrors();
            }
            else {
                this.errorDiv.hide();
            }
        };
        /**
         * Use this as a main way to report map chart specific errors to the user
         * If the MapChart is ready to handle errors it displays them on the map chart.
         * If not it queues them until the map is ready.
         * @param error
         */
        ErrorHandler.prototype.handleError = function (error) {
            if (error.errorLabel === MapStandardErrors_1.default.UNSUCCESFULL_LOOKUP) {
                this.handleUnsuccessFullLookups(error);
            }
            else {
                this.pushOnErrorQueue(error);
            }
            if (this.ready && this.isInEditMode()) {
                this.showErrors();
            }
        };
        ErrorHandler.prototype.pushOnErrorQueue = function (error) {
            for (var _i = 0, _a = this.errorQueue; _i < _a.length; _i++) {
                var existing = _a[_i];
                //If there already exist an error with the same label try to append the paramters to it.
                if (existing.errorLabel === error.errorLabel && existing.layer === error.layer) {
                    if (existing.parameters && error.parameters) {
                        existing.parameters = existing.parameters.concat(error.parameters);
                        return true;
                    }
                    else {
                        return true;
                    }
                }
            }
            this.errorQueue.push(error);
            return true;
        };
        ErrorHandler.prototype.handleUnsuccessFullLookups = function (error) {
            //Split the parameters in ambiguous and unresolved and add two different errors.
            var unresolved = [];
            var ambiguous = [];
            if (error.parameters) {
                for (var _i = 0, _a = error.parameters; _i < _a.length; _i++) {
                    var location_1 = _a[_i];
                    if (location_1.indexOf("Unresolved:") > -1) {
                        unresolved.push(location_1.slice(12));
                    }
                    else if (location_1.indexOf("Ambiguous:") > -1) {
                        ambiguous.push(location_1.slice(11));
                    }
                    else if (location_1.length > 0) {
                        unresolved.push(location_1);
                    }
                }
            }
            if (unresolved.length > 0) {
                var unresolvedError = {
                    errorLabel: MapStandardErrors_1.default.UNSUCCESFULL_LOOKUP,
                    layer: error.layer,
                    parameters: unresolved
                };
                this.pushOnErrorQueue(unresolvedError);
            }
            if (ambiguous.length > 0) {
                var ambiguousError = {
                    errorLabel: MapStandardErrors_1.default.AMBIGUOUS_LOOKUP,
                    layer: error.layer,
                    parameters: ambiguous
                };
                this.pushOnErrorQueue(ambiguousError);
            }
        };
        ErrorHandler.prototype.isInEditMode = function () {
            if (this.mapChart.extensionObject) {
                return this.mapChart.extensionObject.inEditState();
            }
            return false;
        };
        ErrorHandler.prototype.showErrors = function () {
            this.contentDiv.empty();
            this.contentDiv.append("<p>&nbsp;</p>"); //To not overwrite the icon
            var errorLevel = 0;
            var errorsAdded = false;
            for (var _i = 0, _a = this.errorQueue; _i < _a.length; _i++) {
                var error = _a[_i];
                var currentLevel = this.getErrorLevel(error);
                var translation = "";
                if (error.parameters) {
                    var parameter = error.parameters.join(", ");
                    if (parameter.length > 200) {
                        parameter = parameter.substring(0, 200) + "...";
                    }
                    parameter = "<span class='map-error-parameters'>" + parameter + "</span>";
                    translation = translator_1.default.get(error.errorLabel, parameter);
                }
                else {
                    translation = translator_1.default.get(error.errorLabel);
                }
                errorLevel = (currentLevel > errorLevel) ? currentLevel : errorLevel;
                var layerDiv = this.getLayerDiv(error.layer);
                layerDiv.append("<p>" + translation + "</p>");
                errorsAdded = true;
            }
            if (errorLevel === 1) {
                this.iconDiv.removeClass("map-error-error");
                this.iconDiv.addClass("map-error-warning");
            }
            else if (errorLevel === 2) {
                this.iconDiv.removeClass("map-error-warning");
                this.iconDiv.addClass("map-error-error");
            }
            if (!this.errorDiv.is(":visible") && errorsAdded) {
                this.errorDiv.show();
            }
            else if (!errorsAdded) {
                this.errorDiv.hide();
            }
        };
        ErrorHandler.prototype.getErrorLevel = function (error) {
            switch (error.errorLabel) {
                case MapStandardErrors_1.default.UNSUCCESFULL_LOOKUP:
                case MapStandardErrors_1.default.LIMITED_DATA:
                    return 0;
                case MapStandardErrors_1.default.INVALID_GEOMETRY:
                    return 1;
                case MapStandardErrors_1.default.FAILED_LOOKUP:
                    return 2;
            }
            return 0;
        };
        ErrorHandler.prototype.getLayerDiv = function (layer) {
            var layerDiv = this.contentDiv.find("#error-layer-" + layer.id);
            if (layerDiv.length > 0) {
                return layerDiv;
            }
            else {
                var divName = translator_1.default.get(layer.layerName);
                var newDiv = "<div id='error-layer-" + layer.id + "' >";
                if (layer.layout && layer.layout.qHyperCube && layer.layout.qHyperCube.qDimensionInfo && layer.layout.qHyperCube.qDimensionInfo[0]) {
                    newDiv = newDiv + "<span class='map-error-layer-name'>" + layer.layout.qHyperCube.qDimensionInfo[0].qFallbackTitle + "</span>";
                }
                newDiv = newDiv + " - " + divName + "</div>";
                return jquery_1.default(newDiv).appendTo(this.contentDiv);
            }
        };
        ErrorHandler.prototype.clearErrors = function () {
            this.errorDiv.hide();
            this.contentDiv.empty();
            this.errorQueue = [];
        };
        ErrorHandler.prototype.clearqError = function (layer) {
            if (layer.legend) {
                layer.legend.setError();
            }
        };
        ErrorHandler.prototype.handleqError = function (qErrorCode, layer) {
            // Note: The map hadle only hyperCube data and not qListObjects or old map layers. Only need to check getHyperCubeError.
            var errorMessage = this.getCustomErrorMessage(layer.layout.qHyperCube) || error_translation_1.default.getHyperCubeError(qErrorCode);
            if (layer.legend) {
                if (qErrorCode === engine_enums_1.default.NxLocalizedErrorCode.LOCERR_CALC_EVAL_CONDITION_FAILED) {
                    layer.legend.setError("soft-error", errorMessage);
                }
                else {
                    layer.legend.setError("hard-error", errorMessage, translator_1.default.get("Object.Error"));
                }
            }
        };
        ErrorHandler.prototype.hasCalcConditionFailed = function (qErrorCode) {
            return qErrorCode === engine_enums_1.default.NxLocalizedErrorCode.LOCERR_CALC_EVAL_CONDITION_FAILED;
        };
        // So far it only extracts calculated condition message
        ErrorHandler.prototype.getCustomErrorMessage = function (dataEntity) {
            var errorCode = dataEntity.qError.qErrorCode;
            if (errorCode === engine_enums_1.default.NxLocalizedErrorCode.LOCERR_CALC_EVAL_CONDITION_FAILED) {
                return calc_cond_adapter_1.default.getLayoutMsg(dataEntity);
            }
            else {
                return "";
            }
        };
        /**
         * Use this to create and error event that the ErrorHandler can use.
         * Convinient way to package the label, layer and eventual parameters
         * The errorLabel decides what kind of error it is and how it will be presented.
         * It is possible to supply a number of parameters to the error message if the
         * errorLabel translation support paramters.
         * @param errorLabel An error label from MapStandardErrors. Should be available in client.resx
         * @param layer  the layer that is affected
         * @param parameters optional parameters if the translation of the errorLabel in client.resx support it.
         */
        ErrorHandler.createErrorEvent = function (errorLabel, layer, parameters) {
            return {
                errorLabel: errorLabel,
                layer: layer,
                parameters: parameters
            };
        };
        /**
         * Use to report when there is error in the Webmap loading.
         * Currently it does only log since the rest of the error handling is done
         * when the error is reported back to require and is handled in the sense code.
         * The logging is only for fault-tracing for support.
         * @param error the error message to display in the log
         */
        ErrorHandler.mapScriptFailed = function (error) {
            console.error(error.message); //
        };
        return ErrorHandler;
    }());
    exports.default = ErrorHandler;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0Vycm9ySGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFVQTs7OztPQUlHO0lBRUg7UUFRSSxzQkFBWSxRQUFvQjtZQUFoQyxpQkFTQztZQVpELFVBQUssR0FBbUIsS0FBSyxDQUFDO1lBSTFCLElBQUksQ0FBQyxRQUFRLEdBQUssUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUssZ0JBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25HLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQUMsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBTSxnQkFBQyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBRTtnQkFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxrQ0FBVyxHQUFYLFVBQVksS0FBZTtZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQjtRQUNMLENBQUM7UUFFRCxvQ0FBYSxHQUFiO1lBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUs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VUFBdUIsVUFBa0I7WUFDckMsT0FBTyxVQUFVLEtBQUssc0JBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM3RixDQUFDO1FBRUQsdURBQXVEO1FBQy9DLDRDQUFxQixHQUE3QixVQUErQixVQUF3QjtZQUNuRCxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztZQUNoRCxJQUFLLFNBQVMsS0FBSyxzQkFBVyxDQUFDLG9CQUFvQixDQUFDLGlDQUFpQyxFQUFFO2dCQUNuRixPQUFPLDJCQUFlLENBQUMsWUFBWSxDQUFFLFVBQVUsQ0FBRSxDQUFDO2FBQ3JEO2lCQUNJO2dCQUNELE9BQU8sRUFBRSxDQUFDO2FBQ2I7UUFDTCxDQUFDO1FBRUQ7Ozs7Ozs7OztXQVNHO1FBRUksNkJBQWdCLEdBQXZCLFVBQXdCLFVBQW1CLEVBQUUsS0FBYSxFQUFFLFVBQXFCO1lBQzdFLE9BQU87Z0JBQ0gsVUFBVSxFQUFJLFVBQVU7Z0JBQ3hCLEtBQUssRUFBUyxLQUFLO2dCQUNuQixVQUFVLEVBQUksVUFBVTthQUMzQixDQUFDO1FBQ04sQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUVJLDRCQUFlLEdBQXRCLFVBQXVCLEtBQXdCO1lBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUUsRUFBRTtRQUNyQyxDQUFDO1FBSUwsbUJBQUM7SUFBRCxDQUFDLEFBMVBELElBMFBDO0lBRUQsa0JBQWUsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgICAgICAgICAgICAgICAgIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB0cmFuc2xhdG9yICAgICAgICBmcm9tIFwidHJhbnNsYXRvclwiO1xuaW1wb3J0IGVuZ2luZUVudW1zICAgICAgIGZyb20gXCJhdXRvZ2VuZXJhdGVkL3FpeC9lbmdpbmUtZW51bXNcIjtcbmltcG9ydCBDYWxjQ29uZEFkYXB0ZXIgICBmcm9tIFwib2JqZWN0cy9hZGFwdGVycy9jYWxjLWNvbmQtYWRhcHRlclwiO1xuaW1wb3J0IEVycm9yVHJhbnNsYXRpb24gIGZyb20gXCJvYmplY3RzLmVycm9yLWhhbmRsaW5nL2Vycm9yLXRyYW5zbGF0aW9uXCIgO1xuaW1wb3J0IExheWVyICAgICAgICAgICAgIGZyb20gXCIuL2xheWVycy9MYXllclwiO1xuaW1wb3J0IE1hcENoYXJ0ICAgICAgICAgIGZyb20gXCIuL01hcENoYXJ0XCI7XG5pbXBvcnQgTWFwRXJyb3JFdmVudCAgICAgZnJvbSBcIi4vTWFwRXJyb3JFdmVudFwiO1xuaW1wb3J0IE1hcFN0YW5kYXJkRXJyb3JzIGZyb20gXCIuL01hcFN0YW5kYXJkRXJyb3JzXCI7XG5cbi8qKlxuICogQ29udGFpbnMgbG9naWMgZm9yIGhhbmRsaW5nIGFuZCBkaXNwbGF5aW5nIGVycm9zIGFuZCB3YXJuaWducyB0aGF0IHRoZSB1c2VyIG5lZWQgdG8gYmUgYXdhcmUgb2YuXG4gKiBJdCB3b3JrIHdpdGggZGVmaW5lZCBlcnJvcnMgaW4gTWFwU3RhbmRhcmRFcnJvcnMuIFRoZSB0eXBlIG9mIGVycm9yIGRlY2llZHMgaG93IGl0IHNob3VsZCBiZSBkaXNwbGF5ZWQgZm9yIHRoZSB1c2VyLlxuICogVG8gYmUgYWJsZSB0byB3b3JrIGl0IG5lZWQgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIGEgTWFwQ2hhcnQgdGhhdCBpdCB1c2UgdG8gZGlzcGxheSB0aGUgZXJyb3JzIG9uLlxuICovXG5cbmNsYXNzIEVycm9ySGFuZGxlciB7XG4gICAgbWFwQ2hhcnQgICAgOiBNYXBDaGFydDtcbiAgICBlcnJvckRpdiAgICA6IEpRdWVyeTtcbiAgICBjb250ZW50RGl2ICA6IEpRdWVyeTtcbiAgICBpY29uRGl2ICAgICA6IEpRdWVyeTtcbiAgICByZWFkeSAgICAgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBlcnJvclF1ZXVlICA6IE1hcEVycm9yRXZlbnRbXTtcblxuICAgIGNvbnN0cnVjdG9yKG1hcENoYXJ0ICA6IE1hcENoYXJ0KSB7XG4gICAgICAgIHRoaXMubWFwQ2hhcnQgICA9IG1hcENoYXJ0O1xuICAgICAgICB0aGlzLmVycm9yRGl2ICAgPSAkKFwiLm1hcC1lcnJvci1kaXZcIiwgbWFwQ2hhcnQucGFyZW50RGl2KS5hdHRyKFwiaWRcIiwgXCJtYXBFcnJvcmRpdi1cIiArIG1hcENoYXJ0LmlkKTtcbiAgICAgICAgdGhpcy5jb250ZW50RGl2ID0gJChcIi5tYXAtZXJyb3ItY29udGVudC1kaXZcIiwgdGhpcy5lcnJvckRpdik7XG4gICAgICAgIHRoaXMuaWNvbkRpdiAgICA9ICQoXCIubWFwLWVycm9yLWljb24tZGl2XCIsIHRoaXMuZXJyb3JEaXYpO1xuICAgICAgICB0aGlzLmVycm9yRGl2LmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnREaXYuc2xpZGVUb2dnbGUoXCJmYXN0XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lcnJvclF1ZXVlID0gW107XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBVc2UgdG8gdG9nZ2xlIGlmIHRoZSBNYXAgaXMgcmVhZHkgdG8gZGlzcGxheSBlcnJvcnMgb3Igbm90XG4gICAgICovXG4gICAgc2V0TWFwUmVhZHkocmVhZHkgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucmVhZHkgPSByZWFkeTtcbiAgICAgICAgaWYgKHJlYWR5ICYmIHRoaXMuZXJyb3JRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcENoYXJ0LmV4dGVuc2lvbk9iamVjdC5pbkVkaXRTdGF0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JEaXYuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgYXMgYSBtYWluIHdheSB0byByZXBvcnQgbWFwIGNoYXJ0IHNwZWNpZmljIGVycm9ycyB0byB0aGUgdXNlclxuICAgICAqIElmIHRoZSBNYXBDaGFydCBpcyByZWFkeSB0byBoYW5kbGUgZXJyb3JzIGl0IGRpc3BsYXlzIHRoZW0gb24gdGhlIG1hcCBjaGFydC5cbiAgICAgKiBJZiBub3QgaXQgcXVldWVzIHRoZW0gdW50aWwgdGhlIG1hcCBpcyByZWFkeS5cbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKi9cblxuICAgIGhhbmRsZUVycm9yKGVycm9yIDogTWFwRXJyb3JFdmVudCkge1xuICAgICAgICBpZiAoZXJyb3IuZXJyb3JMYWJlbCA9PT0gTWFwU3RhbmRhcmRFcnJvcnMuVU5TVUNDRVNGVUxMX0xPT0tVUCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVVbnN1Y2Nlc3NGdWxsTG9va3VwcyhlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hPbkVycm9yUXVldWUoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlYWR5ICYmIHRoaXMuaXNJbkVkaXRNb2RlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9ycygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHB1c2hPbkVycm9yUXVldWUoZXJyb3IgOiBNYXBFcnJvckV2ZW50KSA6IGJvb2xlYW4ge1xuICAgICAgICBmb3IgKGNvbnN0IGV4aXN0aW5nIG9mIHRoaXMuZXJyb3JRdWV1ZSkge1xuICAgICAgICAgICAgLy9JZiB0aGVyZSBhbHJlYWR5IGV4aXN0IGFuIGVycm9yIHdpdGggdGhlIHNhbWUgbGFiZWwgdHJ5IHRvIGFwcGVuZCB0aGUgcGFyYW10ZXJzIHRvIGl0LlxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nLmVycm9yTGFiZWwgPT09IGVycm9yLmVycm9yTGFiZWwgJiYgZXhpc3RpbmcubGF5ZXIgPT09IGVycm9yLmxheWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nLnBhcmFtZXRlcnMgJiYgZXJyb3IucGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5wYXJhbWV0ZXJzID0gZXhpc3RpbmcucGFyYW1ldGVycy5jb25jYXQoZXJyb3IucGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yUXVldWUucHVzaChlcnJvcik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVW5zdWNjZXNzRnVsbExvb2t1cHMoZXJyb3IgOiBNYXBFcnJvckV2ZW50KSB7XG4gICAgICAgIC8vU3BsaXQgdGhlIHBhcmFtZXRlcnMgaW4gYW1iaWd1b3VzIGFuZCB1bnJlc29sdmVkIGFuZCBhZGQgdHdvIGRpZmZlcmVudCBlcnJvcnMuXG4gICAgICAgIGNvbnN0IHVucmVzb2x2ZWQgPSBbXTtcbiAgICAgICAgY29uc3QgYW1iaWd1b3VzID0gW107XG4gICAgICAgIGlmIChlcnJvci5wYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxvY2F0aW9uIG9mIGVycm9yLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24uaW5kZXhPZihcIlVucmVzb2x2ZWQ6XCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZC5wdXNoKGxvY2F0aW9uLnNsaWNlKDEyKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbi5pbmRleE9mKFwiQW1iaWd1b3VzOlwiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGFtYmlndW91cy5wdXNoKGxvY2F0aW9uLnNsaWNlKDExKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVucmVzb2x2ZWQucHVzaChsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1bnJlc29sdmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHVucmVzb2x2ZWRFcnJvciA9IHtcbiAgICAgICAgICAgICAgICBlcnJvckxhYmVsICA6IE1hcFN0YW5kYXJkRXJyb3JzLlVOU1VDQ0VTRlVMTF9MT09LVVAsXG4gICAgICAgICAgICAgICAgbGF5ZXIgICAgICAgOiBlcnJvci5sYXllcixcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzICA6IHVucmVzb2x2ZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnB1c2hPbkVycm9yUXVldWUodW5yZXNvbHZlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW1iaWd1b3VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGFtYmlndW91c0Vycm9yID0ge1xuICAgICAgICAgICAgICAgIGVycm9yTGFiZWwgIDogTWFwU3RhbmRhcmRFcnJvcnMuQU1CSUdVT1VTX0xPT0tVUCxcbiAgICAgICAgICAgICAgICBsYXllciAgICAgICA6IGVycm9yLmxheWVyLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgIDogYW1iaWd1b3VzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5wdXNoT25FcnJvclF1ZXVlKGFtYmlndW91c0Vycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNJbkVkaXRNb2RlKCkgOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubWFwQ2hhcnQuZXh0ZW5zaW9uT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBDaGFydC5leHRlbnNpb25PYmplY3QuaW5FZGl0U3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93RXJyb3JzKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnREaXYuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5jb250ZW50RGl2LmFwcGVuZChcIjxwPiZuYnNwOzwvcD5cIik7IC8vVG8gbm90IG92ZXJ3cml0ZSB0aGUgaWNvblxuICAgICAgICBsZXQgZXJyb3JMZXZlbCA9IDA7XG4gICAgICAgIGxldCBlcnJvcnNBZGRlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGVycm9yIG9mIHRoaXMuZXJyb3JRdWV1ZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudExldmVsID0gdGhpcy5nZXRFcnJvckxldmVsKGVycm9yKTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoZXJyb3IucGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbWV0ZXIgPSBlcnJvci5wYXJhbWV0ZXJzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyLmxlbmd0aCA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXIuc3Vic3RyaW5nKDAsIDIwMCkgKyBcIi4uLlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIgPSBcIjxzcGFuIGNsYXNzPSdtYXAtZXJyb3ItcGFyYW1ldGVycyc+XCIrcGFyYW1ldGVyK1wiPC9zcGFuPlwiO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gdHJhbnNsYXRvci5nZXQoZXJyb3IuZXJyb3JMYWJlbCwgcGFyYW1ldGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSB0cmFuc2xhdG9yLmdldChlcnJvci5lcnJvckxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yTGV2ZWwgPSAoY3VycmVudExldmVsID4gZXJyb3JMZXZlbCkgPyBjdXJyZW50TGV2ZWwgOiBlcnJvckxldmVsO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJEaXYgPSB0aGlzLmdldExheWVyRGl2KGVycm9yLmxheWVyKTtcbiAgICAgICAgICAgIGxheWVyRGl2LmFwcGVuZChcIjxwPlwiICsgdHJhbnNsYXRpb24gKyBcIjwvcD5cIik7XG4gICAgICAgICAgICBlcnJvcnNBZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yTGV2ZWwgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbkRpdi5yZW1vdmVDbGFzcyhcIm1hcC1lcnJvci1lcnJvclwiKTtcbiAgICAgICAgICAgIHRoaXMuaWNvbkRpdi5hZGRDbGFzcyhcIm1hcC1lcnJvci13YXJuaW5nXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVycm9yTGV2ZWwgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbkRpdi5yZW1vdmVDbGFzcyhcIm1hcC1lcnJvci13YXJuaW5nXCIpO1xuICAgICAgICAgICAgdGhpcy5pY29uRGl2LmFkZENsYXNzKFwibWFwLWVycm9yLWVycm9yXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmVycm9yRGl2LmlzKFwiOnZpc2libGVcIikgJiYgZXJyb3JzQWRkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JEaXYuc2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFlcnJvcnNBZGRlZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvckRpdi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEVycm9yTGV2ZWwoZXJyb3IgOiBNYXBFcnJvckV2ZW50KSB7XG4gICAgICAgIHN3aXRjaChlcnJvci5lcnJvckxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIE1hcFN0YW5kYXJkRXJyb3JzLlVOU1VDQ0VTRlVMTF9MT09LVVAgOlxuICAgICAgICAgICAgY2FzZSBNYXBTdGFuZGFyZEVycm9ycy5MSU1JVEVEX0RBVEEgOlxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgY2FzZSBNYXBTdGFuZGFyZEVycm9ycy5JTlZBTElEX0dFT01FVFJZIDpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIGNhc2UgTWFwU3RhbmRhcmRFcnJvcnMuRkFJTEVEX0xPT0tVUCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMYXllckRpdihsYXllciA6IExheWVyKSA6IEpRdWVyeSB7XG4gICAgICAgIGNvbnN0IGxheWVyRGl2ID0gIHRoaXMuY29udGVudERpdi5maW5kKFwiI2Vycm9yLWxheWVyLVwiK2xheWVyLmlkKTtcbiAgICAgICAgaWYgKGxheWVyRGl2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBsYXllckRpdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdk5hbWUgPSB0cmFuc2xhdG9yLmdldChsYXllci5sYXllck5hbWUpO1xuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IFwiPGRpdiBpZD0nZXJyb3ItbGF5ZXItXCIrbGF5ZXIuaWQrXCInID5cIjtcbiAgICAgICAgICAgIGlmIChsYXllci5sYXlvdXQgJiYgbGF5ZXIubGF5b3V0LnFIeXBlckN1YmUgJiYgbGF5ZXIubGF5b3V0LnFIeXBlckN1YmUucURpbWVuc2lvbkluZm8gJiYgbGF5ZXIubGF5b3V0LnFIeXBlckN1YmUucURpbWVuc2lvbkluZm9bMF0pIHtcbiAgICAgICAgICAgICAgICBuZXdEaXYgPSBuZXdEaXYgK1wiPHNwYW4gY2xhc3M9J21hcC1lcnJvci1sYXllci1uYW1lJz5cIiArIGxheWVyLmxheW91dC5xSHlwZXJDdWJlLnFEaW1lbnNpb25JbmZvWzBdLnFGYWxsYmFja1RpdGxlICtcIjwvc3Bhbj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0RpdiA9IG5ld0RpdiArIFwiIC0gXCIgKyBkaXZOYW1lICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgIHJldHVybiAkKG5ld0RpdikuYXBwZW5kVG8odGhpcy5jb250ZW50RGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyRXJyb3JzKCkge1xuICAgICAgICB0aGlzLmVycm9yRGl2LmhpZGUoKTtcbiAgICAgICAgdGhpcy5jb250ZW50RGl2LmVtcHR5KCk7XG4gICAgICAgIHRoaXMuZXJyb3JRdWV1ZSA9IFtdO1xuICAgIH1cblxuICAgIGNsZWFycUVycm9yKGxheWVyOiBMYXllcikge1xuICAgICAgICBpZiAobGF5ZXIubGVnZW5kKSB7XG4gICAgICAgICAgICBsYXllci5sZWdlbmQuc2V0RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZXFFcnJvcihxRXJyb3JDb2RlIDogbnVtYmVyLCBsYXllciA6IExheWVyKSB7XG4gICAgICAgIC8vIE5vdGU6IFRoZSBtYXAgaGFkbGUgb25seSBoeXBlckN1YmUgZGF0YSBhbmQgbm90IHFMaXN0T2JqZWN0cyBvciBvbGQgbWFwIGxheWVycy4gT25seSBuZWVkIHRvIGNoZWNrIGdldEh5cGVyQ3ViZUVycm9yLlxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLmdldEN1c3RvbUVycm9yTWVzc2FnZSggbGF5ZXIubGF5b3V0LnFIeXBlckN1YmUgKSB8fCBFcnJvclRyYW5zbGF0aW9uLmdldEh5cGVyQ3ViZUVycm9yKCBxRXJyb3JDb2RlICk7XG4gICAgICAgIGlmIChsYXllci5sZWdlbmQpIHtcbiAgICAgICAgICAgIGlmIChxRXJyb3JDb2RlID09PSBlbmdpbmVFbnVtcy5OeExvY2FsaXplZEVycm9yQ29kZS5MT0NFUlJfQ0FMQ19FVkFMX0NPTkRJVElPTl9GQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBsYXllci5sZWdlbmQuc2V0RXJyb3IoXCJzb2Z0LWVycm9yXCIsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxheWVyLmxlZ2VuZC5zZXRFcnJvcihcImhhcmQtZXJyb3JcIiwgZXJyb3JNZXNzYWdlLCB0cmFuc2xhdG9yLmdldChcIk9iamVjdC5FcnJvclwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDYWxjQ29uZGl0aW9uRmFpbGVkKHFFcnJvckNvZGU6IG51bWJlcil7XG4gICAgICAgIHJldHVybiBxRXJyb3JDb2RlID09PSBlbmdpbmVFbnVtcy5OeExvY2FsaXplZEVycm9yQ29kZS5MT0NFUlJfQ0FMQ19FVkFMX0NPTkRJVElPTl9GQUlMRUQ7XG4gICAgfVxuXG4gICAgLy8gU28gZmFyIGl0IG9ubHkgZXh0cmFjdHMgY2FsY3VsYXRlZCBjb25kaXRpb24gbWVzc2FnZVxuICAgIHByaXZhdGUgZ2V0Q3VzdG9tRXJyb3JNZXNzYWdlIChkYXRhRW50aXR5IDogTnhIeXBlckN1YmUpIHtcbiAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZGF0YUVudGl0eS5xRXJyb3IhLnFFcnJvckNvZGU7XG4gICAgICAgIGlmICggZXJyb3JDb2RlID09PSBlbmdpbmVFbnVtcy5OeExvY2FsaXplZEVycm9yQ29kZS5MT0NFUlJfQ0FMQ19FVkFMX0NPTkRJVElPTl9GQUlMRUQgKXtcbiAgICAgICAgICAgIHJldHVybiBDYWxjQ29uZEFkYXB0ZXIuZ2V0TGF5b3V0TXNnKCBkYXRhRW50aXR5ICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIHRvIGNyZWF0ZSBhbmQgZXJyb3IgZXZlbnQgdGhhdCB0aGUgRXJyb3JIYW5kbGVyIGNhbiB1c2UuXG4gICAgICogQ29udmluaWVudCB3YXkgdG8gcGFja2FnZSB0aGUgbGFiZWwsIGxheWVyIGFuZCBldmVudHVhbCBwYXJhbWV0ZXJzXG4gICAgICogVGhlIGVycm9yTGFiZWwgZGVjaWRlcyB3aGF0IGtpbmQgb2YgZXJyb3IgaXQgaXMgYW5kIGhvdyBpdCB3aWxsIGJlIHByZXNlbnRlZC5cbiAgICAgKiBJdCBpcyBwb3NzaWJsZSB0byBzdXBwbHkgYSBudW1iZXIgb2YgcGFyYW1ldGVycyB0byB0aGUgZXJyb3IgbWVzc2FnZSBpZiB0aGVcbiAgICAgKiBlcnJvckxhYmVsIHRyYW5zbGF0aW9uIHN1cHBvcnQgcGFyYW10ZXJzLlxuICAgICAqIEBwYXJhbSBlcnJvckxhYmVsIEFuIGVycm9yIGxhYmVsIGZyb20gTWFwU3RhbmRhcmRFcnJvcnMuIFNob3VsZCBiZSBhdmFpbGFibGUgaW4gY2xpZW50LnJlc3hcbiAgICAgKiBAcGFyYW0gbGF5ZXIgIHRoZSBsYXllciB0aGF0IGlzIGFmZmVjdGVkXG4gICAgICogQHBhcmFtIHBhcmFtZXRlcnMgb3B0aW9uYWwgcGFyYW1ldGVycyBpZiB0aGUgdHJhbnNsYXRpb24gb2YgdGhlIGVycm9yTGFiZWwgaW4gY2xpZW50LnJlc3ggc3VwcG9ydCBpdC5cbiAgICAgKi9cblxuICAgIHN0YXRpYyBjcmVhdGVFcnJvckV2ZW50KGVycm9yTGFiZWwgOiBzdHJpbmcsIGxheWVyIDogTGF5ZXIsIHBhcmFtZXRlcnM/IDpzdHJpbmdbXSkgOiBNYXBFcnJvckV2ZW50IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yTGFiZWwgIDogZXJyb3JMYWJlbCxcbiAgICAgICAgICAgIGxheWVyICAgICAgIDogbGF5ZXIsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzICA6IHBhcmFtZXRlcnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gcmVwb3J0IHdoZW4gdGhlcmUgaXMgZXJyb3IgaW4gdGhlIFdlYm1hcCBsb2FkaW5nLlxuICAgICAqIEN1cnJlbnRseSBpdCBkb2VzIG9ubHkgbG9nIHNpbmNlIHRoZSByZXN0IG9mIHRoZSBlcnJvciBoYW5kbGluZyBpcyBkb25lXG4gICAgICogd2hlbiB0aGUgZXJyb3IgaXMgcmVwb3J0ZWQgYmFjayB0byByZXF1aXJlIGFuZCBpcyBoYW5kbGVkIGluIHRoZSBzZW5zZSBjb2RlLlxuICAgICAqIFRoZSBsb2dnaW5nIGlzIG9ubHkgZm9yIGZhdWx0LXRyYWNpbmcgZm9yIHN1cHBvcnQuXG4gICAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIGxvZ1xuICAgICAqL1xuXG4gICAgc3RhdGljIG1hcFNjcmlwdEZhaWxlZChlcnJvcjoge21lc3NhZ2U6IHN0cmluZ30pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTsgIC8vXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckhhbmRsZXI7XG4iXX0=