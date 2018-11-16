const inscription = require('./inscription.js');

module.exports = (function() {
  const foundAlternativesController = {};
  const alternativeViewList = [];
  let pickedAlternativesButtonOn = false;

  foundAlternativesController.generateDOM = function() {
    filterIfPickedAlternatives();
  };

  foundAlternativesController.unpickStarInAlternatives = function(starNumber) {
    for (let i = 0; i < alternativeViewList.length; i++) {
      alternativeViewList[i].unpickStar(starNumber);
    }
  };

  foundAlternativesController.showOnlyPickedAlternatives = function() {
    pickedAlternativesButtonOn = true;
    let hiddenCount = 0;
    for (let i = 0; i < alternativeViewList.length; i++) {
      const hidden = alternativeViewList[i].hideIfNotPicked();
      hidden ? hiddenCount++ : hiddenCount;
    }
    toggleEmptyText(hiddenCount == alternativeViewList.length);
  };

  var filterGroupIsBeignUsed = function(filterGroup) {
    for (const prop in filterGroup) {
      const value = filterGroup[prop];
      if (typeof value !== 'boolean') {
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

const AlternativeView = function(alternative, index) {
  const alternativeView = {};
  const viewHtml = {};
  const starsHtml = {};

  const init = function() {
    paintAlternativeDays();
  };

  var paintAlternativeDays = function() {
    for (let i = 0; i < alternative.schedules.length; i++) {
      const alternativeSubject = alternative.schedules[i];
      for (let j = 0; j < alternativeSubject.schedule.days.length; j++) {
        console.log(alternativeSubject.schedule.days);
      }
    }
  };

  alternativeView.unpickStar = function(starNumber) {
    const star = starsHtml[starNumber];
    star.classList.remove('picked');
    if (alternative.pickedNumber === starNumber) {
      alternative.pickedNumber = '';
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
