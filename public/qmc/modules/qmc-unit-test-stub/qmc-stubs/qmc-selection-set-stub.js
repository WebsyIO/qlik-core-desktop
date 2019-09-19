/*
* Plain javascript object for stubbing the qmc-selection-set-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {

	var stub = {};
	var defaultSelectionSet = function() {
		var internalItems = [];
		var selectionSet = {
			id: "123",
			items: function() {
				return internalItems;
			},
			length: 0,
			//length: internalItems.length,
			remove: function() {
			},
			containsSameType: function() {
				return true;
			},
			add: function(item) { //}id, name, type, privileges) {
				//var item = { id: id, name: name, type: type, privileges: privileges };
				internalItems.push(item);
			},
			clear: function() {
				internalItems = [];
			},
			type: "App",
			filter: function() {
				return {
					removed: []
				};
			},
			update: function() {
			},
			destroy: function() {
				return function() {
				};
			},
			accessCount: function() {
				return selectionSet._accessCount;
			},
			selection: {
				id: '1234',
				items: []
			},
			_accessCount: 0,
			withAccessCount: function(count) {
				selectionSet._accessCount = count;
				return selectionSet;
			}
		};
		return selectionSet;
	};

	var withItems = function(itemsArray) {
		var selSet = defaultSelectionSet();
		itemsArray.forEach(function(item) {
			selSet.add(item);
		});

		//selSet.items = function () {
		//	return itemsArray;
		//};
		selSet.length = itemsArray.length;
		return selSet;
	};

	var withId = function(id) {
		var selSet = defaultSelectionSet();
		selSet.id = id;
		return selSet;
	};

	var withType = function(type) {
		var selSet = defaultSelectionSet();
		selSet.type = type;
		return selSet;
	};

	var withItemsAndId = function(itemsArray, id) {
		var selSet = withItems(itemsArray);
		selSet.id = id;
		return selSet;
	};

	var withItemsAndIdAndCount = function(itemsArray, id, count) {
		var selSet = withItems(itemsArray);
		selSet.id = id;
		selSet.withAccessCount(count);
		return selSet;
	};

	var withItemsAndIdAndType = function(itemsArray, id, type) {
		var selSet = withItems(itemsArray);
		selSet.id = id;
		selSet.type = type;
		return selSet;
	};

	var withItemsAndIdAndTypeAndContainsDifferentTypes = function(itemsArray, id, type) {
		var selSet = withItemsAndId(itemsArray, id);
		selSet.containsSameType = function() {
			return false;
		};
		selSet.type = type;
		return selSet;
	};

	var withItemsAndType = function(items, type) {
		var selSet = withItems(items);
		selSet.type = type;
		return selSet;
	};

	var withItemsAndData = function(items) {
		var selSet = withItems(items);
		//selSet.data = dataObj;
		return selSet;
	};

	Object.defineProperties(stub, {
		name: { value: "qmcSelectionSetFactoryStub" },
		default: {
			value: defaultSelectionSet
		},
		withItems: {
			value: withItems
		},
		withId: {
			value: withId
		},
		withType: {
			value: withType
		},
		withItemsAndId: {
			value: withItemsAndId
		},
		withItemsAndType: {
			value: withItemsAndType
		},
		withItemsAndIdAndType: {
			value: withItemsAndIdAndType
		},
		withItemsAndIdAndTypeAndContainsDifferentTypes: {
			value: withItemsAndIdAndTypeAndContainsDifferentTypes
		},
		withItemsAndData: {
			value: withItemsAndData
		},
		withItemsAndIdAndCount: {
			value: withItemsAndIdAndCount
		}
	});

	return stub;
});
