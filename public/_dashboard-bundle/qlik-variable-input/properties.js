/*global define*/
define(["qlik"],function(e){"use strict";function n(e){return JSON.stringify([e.variableName,e.render,e.valueType,e.alternatives,e.dynamicvalues,e.min,e.max,e.step,e.style,e.buttonMode,e.updateondrag,e.rangelabel])}return{cloneSetup:function(e){var a=n(e);return{changed:function(e){return n(e)!==a}}},initialProperties:{variableValue:{},variableName:"",render:"f",valueType:"x",alternatives:[],dynamicvalues:"",min:0,max:100,step:1,style:"qlik",buttonMode:"rowfill",updateondrag:!1},definition:{type:"items",component:"accordion",items:{settings:{uses:"settings",items:{variable:{type:"items",label:"Variable",items:{name:{ref:"variableName",label:"Name",type:"string",component:"dropdown",options:function(){return e.currApp().createGenericObject({qVariableListDef:{qType:"variable"}}).then(function(e){return e.layout.qVariableList.qItems.map(function(e){return{value:e.qName,label:50<e.qName.length?e.qName.slice(0,50)+"...":e.qName}})})},change:function(e){e.variableValue=e.variableValue||{},e.variableValue.qStringExpression='="'+e.variableName+'"'}},render:{type:"string",component:"dropdown",label:"Show as",ref:"render",options:[{value:"b",label:"Buttons"},{value:"s",label:"Drop down"},{value:"f",label:"Input box"},{value:"l",label:"Slider"}],defaultValue:"f"},display:{type:"string",component:"dropdown",label:"Display",ref:"buttonMode",show:function(e){return"b"===e.render},options:[{value:"rowfill",label:"Row"},{value:"colfill",label:"Column"}]},updateondrag:{type:"boolean",label:"Update on drag",ref:"updateondrag",defaultValue:!1,show:function(e){return"l"===e.render}}}},values:{type:"items",label:"Values",show:function(e){return"f"!=e.render},items:{valueType:{type:"string",component:"dropdown",label:"Fixed or dynamic values",ref:"valueType",options:[{value:"x",label:"Fixed"},{value:"d",label:"Dynamic"}],defaultValue:"x",show:function(e){return-1<["b","s"].indexOf(e.render)}},dynamicvalues:{type:"string",ref:"dynamicvalues",label:"Dynamic values",expression:"optional",show:function(e){return-1<["b","s"].indexOf(e.render)&&"d"===e.valueType}},dynamictext:{component:"text",label:"Use | to separate values and ~ to separate value and label, like this: value1|value2 or value1~label1|value2~label2)",show:function(e){return-1<["b","s"].indexOf(e.render)&&"d"===e.valueType}},alternatives:{type:"array",ref:"alternatives",label:"Alternatives",itemTitleRef:"label",allowAdd:!0,allowRemove:!0,addTranslation:"Add Alternative",items:{value:{type:"string",ref:"value",label:"Value",expression:"optional"},label:{type:"string",ref:"label",label:"Label",expression:"optional"}},show:function(e){return-1<["b","s"].indexOf(e.render)&&"d"!==e.valueType}},min:{ref:"min",label:"Min",type:"number",defaultValue:0,expression:"optional",show:function(e){return"l"===e.render}},max:{ref:"max",label:"Max",type:"number",defaultValue:100,expression:"optional",show:function(e){return"l"===e.render}},step:{ref:"step",label:"Step",type:"number",defaultValue:1,expression:"optional",show:function(e){return"l"===e.render}},rangelabel:{type:"boolean",label:"Slider label",ref:"rangelabel",defaultValue:!1,show:function(e){return"l"===e.render}}}},selections:{show:!1},general:{items:{details:{show:!1}}}}},about:{label:"About",component:"items",items:{header:{label:"Variable input",style:"header",component:"text"},paragraph1:{label:"An extensions that assigns a value to a variable. Values can be pre-defined and the object can be displayed as a slider, a button, a drop-down or an input box.",component:"text"},paragraph2:{label:"Variable input is based upon an extension created by Erik Wetterberg.",component:"text"}}}}},support:{export:!1,exportData:!1,snapshot:!1}}});