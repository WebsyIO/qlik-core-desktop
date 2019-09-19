/**
* Decorates qmcTranslationService to record the usage of translation strings
*
* Use this decorator in debugging purpose by including this decorator in the package
* and then write "translation.usageReport( [filter] )" at any given time in the console.
* Where filter is:
* true => return unused translations
* false => return undefined translations
* omitted => return everything
*
* Write "translation.resetDictionary()" to reset the dictionary stored in session storage. If keys has been added or removed.
* Any translations loaded on-demand will get lost until they are loaded again.
*
* Write "translation.traceUndefined=true;" to get a live trace of all undefined translation keys that is called
*/
define(
	[
		'angular',
		'./../qmc-debug-module'
	],
	function(
		angular,
		qmcDebugModule
	) {

		qmcDebugModule.config([
			'$provide',
			function(
				$provide
			) {
				var sessionStorageKey = qmcDebugModule.name + ':qmcTranslationServiceDecorator';

				$provide.decorator('qmcTranslationService', [
					'$delegate',
					'$window',
					function(
						$delegate,
						$window
					) {
						var usage;
						var dictionary;

						var storage = $window.sessionStorage;

						function store() {
							var data = JSON.stringify({
								usage: usage,
								dictionary: dictionary
							});
							storage.setItem(sessionStorageKey, data);
						}

						function getFromStorage() {
							var data = storage.getItem(sessionStorageKey);
							data = (data != null ? JSON.parse(data) : {});

							usage = data.usage || {};
							dictionary = data.dictionary || angular.extend({}, $delegate.dictionary);
						}

						//Get usage and dictionary from session storage
						getFromStorage();


						function recordDictionarySetup(obj) {
							var addDictionary = obj.addDictionary;

							function recordDictionary(dict) {
								dictionary = angular.extend(dictionary, dict);
								store();

								addDictionary.call(this, dict);
							}

							obj.addDictionary = recordDictionary;
						}

						function recordUsageSetup(obj) {
							var translate = obj.translate;

							function recordUsage() {
								var args = Array.prototype.slice.call(arguments);
								var id = args[0];

								if (!usage[id]) {
									usage[id] = true;
									store();
								}

								var result = translate.apply(this, args);

								if (result === undefined && $window.translation.traceUndefined) {
									$window.console.warn('Undefined translation key: ' + id);
								}

								return result;
							}

							obj.translate = recordUsage;
						}

						recordDictionarySetup($delegate);
						recordUsageSetup($delegate);

						function getUsage() {
							var key,
								result = {};

							for (key in dictionary) {
								result[key] = {
									key: key,
									value: dictionary[key],
									isUsed: !!usage[key]
								};
							}

							//record keys "missing" translations
							for (key in usage) {
								if (!result[key]) {
									result[key] = {
										key: key,
										isUsed: true
									};
								}
							}

							return Object.keys(result).map(function(name) {
								return result[name];
							});
						}

						function reportUsage(filter) {

							function filterUsage(item) {
								if (filter == null) {
									return true; //return all
								} else if (filter) {
									return !item.isUsed; //Return unused keys
								}
								return item.value === undefined; //Return undefined keys
							}

							function compare(a, b) {
								var keyA = a.key.toLowerCase(),
									keyB = b.key.toLowerCase();

								return keyA.localeCompare(keyB);
							}

							function output(item) {
								return item.isUsed + '\t' + (item.value !== undefined) + '\t' + item.key + '\t' + item.value;
							}

							function totals(items) {
								var totalCount = 0;
								var usedCount = 0;
								var definedCount = 0;
								var emptyCount = 0;
								var dollars = 0;
								var wordCount = 0;

								items.forEach(function(item) {
									totalCount++;
									usedCount += item.isUsed ? 1 : 0;
									definedCount += item.value !== undefined ? 1 : 0;
									emptyCount += (item.value !== undefined && !item.value) ? 1 : 0;
									dollars += (item.value && item.value[0] === '$') ? 1 : 0;

									if (item.value) {
										wordCount += item.value.split(' ').length;
									}

								});

								return usedCount + '\t ' + definedCount + '\t' + totalCount + '\t$: ' + dollars + ', Empty: ' + emptyCount + ', Words: ~' + wordCount;

							}

							var filteredUsage = getUsage().filter(filterUsage).sort(compare);

							$window.console.log('Used\tDefined\tKey\tValue\n' + filteredUsage.map(output).join('\n') + '\n' + totals(filteredUsage));
						}


						function resetDictionary() {
							dictionary = angular.extend({}, $delegate.dictionary);
							store();
						}

						$window.translation = {
							usageReport: reportUsage,
							resetDictionary: resetDictionary,
							traceUndefined: false
						};


						return $delegate;

					}
				]);

			}
		]);

	}
);
