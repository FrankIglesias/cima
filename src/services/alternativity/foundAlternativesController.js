const inscription = require('./inscription.js');

module.exports = (function() {
	var foundAlternativesController = {};
	var alternativeViewList = [];
	var pickedAlternativesButtonOn = false;

	foundAlternativesController.generateDOM = function() {
		filterIfPickedAlternatives();
	};

	foundAlternativesController.unpickStarInAlternatives = function(starNumber) {
		for (var i = 0; i < alternativeViewList.length; i++) {
			alternativeViewList[i].unpickStar(starNumber);
		};
	};

	foundAlternativesController.showOnlyPickedAlternatives = function() {
		pickedAlternativesButtonOn = true;
		var hiddenCount = 0;
		for (var i = 0; i < alternativeViewList.length; i++) {
			var hidden = alternativeViewList[i].hideIfNotPicked();
			hidden? hiddenCount++ : hiddenCount;
		};
		toggleEmptyText(hiddenCount == alternativeViewList.length);
	};

	var filterGroupIsBeignUsed = function(filterGroup) {
		for(var prop in filterGroup){
			var value = filterGroup[prop];
			if (typeof value != "boolean") {
				return filterGroupIsBeignUsed(value);
			}
			if (!value) {
                return true;
            }
		}
		return false;
	};

	var filterIfPickedAlternatives = function() {
		if (pickedAlternativesButtonOn) {
			foundAlternativesController.showOnlyPickedAlternatives();
		}
	};

	return foundAlternativesController;
})();


var AlternativeView = function(alternative, index) {
	var alternativeView = {};
	var viewHtml = {};
	var starsHtml = {};

	var init = function() {
		paintAlternativeDays();
	};

	var paintAlternativeDays = function() {
		debugger
		for (var i = 0; i < alternative.schedules.length; i++) {
			var alternativeSubject = alternative.schedules[i];
			for (var j = 0; j < alternativeSubject.schedule.days.length; j++) {
				console.log(alternativeSubject.schedule.days);
				// var day = alternativeSubject.schedule.days[j];
				// var dayField = viewHtml.querySelector('tr[rel="'+day.turn+'"] td.'+day.name);
				// dayField.style.backgroundColor = alternativeSubject.subject.color;
				// dayField.innerHTML += alternativeSubject.subject.name + ' ' + day.startHour + ':' + day.endHour + '<br>';
				// dayField.title = alternativeSubject.subject.name;
			}
		}
	};

	alternativeView.unpickStar = function(starNumber) {
		var star = starsHtml[starNumber];
		star.classList.remove('picked');
		if (alternative.pickedNumber === starNumber) {
			alternative.pickedNumber = "";
			inscription.persistPickedAlternatives();
		}
	};

	alternativeView.hideIfNotPicked = function() {
		if (!alternative.pickedNumber) {
			viewHtml.style.display = 'none';
			return true;
		}
	};

	alternativeView.show = function() {
		viewHtml.style.display = 'block';
	};

	init();
	return alternativeView;
};