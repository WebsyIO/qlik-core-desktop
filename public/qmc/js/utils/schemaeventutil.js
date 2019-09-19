/**
* Module with util functions for scemaevents.
*/
(function() {
	"use strict";

	define(["general.utils/date-time"],
		function(datetime) {
			var repositoryDateFormatUtc = "{{>isoDate}}T{{>isoTime}}.000Z",
				repositoryDateFormatLocal = "{{>isoDate}}T{{>isoTime}}.000{{O}}",
				incrementationOption = ["once", "hourly", "daily", "weekly", "monthly"], //is the a good way to get this from the qros?
				schemaEventUtil = {
					convertOptionToViewString: function(value) {
						return incrementationOption[value];
					},

					convertIsoUtcDateTimeToTimeViewString: function(value, outputInUtc) {
						return datetime.stringify(value, datetime.FORMATS.isoTimeLight, outputInUtc);
					},

					convertIsoUtcDateTimeToDateViewString: function(value, outputInUtc) {
						return datetime.stringify(value, datetime.FORMATS.isoDate, outputInUtc);
					},

					convertViewStringToIsoUtcDateTime: function(date, time, inputIsUtc) {
						var self = this,
							dateArray = date.split('-'), // Assumes a good format
							timeArray = time.split(':'),
							year = parseInt(dateArray[0], 10),
							month = parseInt(dateArray[1], 10),
							day = parseInt(dateArray[2], 10),
							hour = parseInt(timeArray[0], 10),
							minute = parseInt(timeArray[1], 10),
							d = new Date(year, month - 1, day, hour, minute, 0, 0);

						if (inputIsUtc) {
							d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()));
						}
						return self.stringify(d, true);
					},

					isoUtcDateTimeMaxValue: function() {
						return "9999-01-01T00:00:00.000Z";
					},

					isoUtcDateTimeDummyValue: function() {
						return "2013-01-01T12:00:00.000Z";
					},

					isIsoUtcDateTimeMaxValue: function(value) {
						return datetime.stringify(value, "{{Y}}", true) === "9999";
					},

					getIsoUtcDateTimeNowWithOffset: function() {
						var self = this,
							currentDate = new Date();
						currentDate.setMinutes(currentDate.getMinutes() + 5); // Add offset
						return self.stringify(currentDate, true);
					},
					stringify: function(date, utc) {
						if (utc) {
							return datetime.stringify(date, repositoryDateFormatUtc, utc);
						} else {
							return datetime.stringify(date, repositoryDateFormatLocal, utc);
						}
					}
				};
			return schemaEventUtil;
		});
}());
