const foundSubjectsController = (function() {
  const foundSubjectsController = {};
  const foundSubjectList = [];

  foundSubjectsController.addSubject = function(subject) {
    const foundSubject = new FoundSubject(subject);
    foundSubjectList.push(foundSubject);
  };

  foundSubjectsController.unSelectListItems = function() {
    for (let i = 0; i < foundSubjectList.length; i++) {
      foundSubjectList[i].subjectListItem.unselect();
    }
  };

  foundSubjectsController.hideTables = function() {
    for (let i = 0; i < foundSubjectList.length; i++) {
      foundSubjectList[i].subjectScheduleTable.hideTable();
    }
  };

  foundSubjectsController.removeFromList = function(foundSubject) {
    const foundSubjectIndex = foundSubjectList.indexOf(foundSubject);
    foundSubjectList.splice(foundSubjectIndex, 1);
  };

  foundSubjectsController.selectFirstSubject = function() {
    if (foundSubjectList.length) {
      foundSubjectList[0].subjectListItem.select();
      foundSubjectList[0].subjectScheduleTable.showTable();
    }
  };

  return foundSubjectsController;
})();

var FoundSubject = function(subject) {
  const foundSubject = {};
  foundSubject.subject = subject;
  foundSubject.subjectScheduleTable = new SubjectScheduleTable(foundSubject);
  foundSubject.subjectListItem = new SubjectListItem(foundSubject);
  return foundSubject;
};

var SubjectScheduleTable = function(foundSubject) {
  const subject = foundSubject.subject || new Subject();
  let table = {};

  const init = function() {
    cloneTableFromDummy();
    addSubjectName();
    attachOnOffOptionalEvents();
    addSubjectIsOptional();
    makeTableRows();
  };

  var cloneTableFromDummy = function() {
    const dummyTable = document.querySelector('.viewSchedule.dummy');
    table = dummyTable.cloneNode(true); // deep
    table.classList.remove('dummy');
    table.setAttribute('rel', subject.name);
    const view = table.querySelector('tr.subjectSchedulesView');
    view.parentNode.removeChild(view);
    document.querySelector('.subjectView').appendChild(table);
  };

  var addSubjectName = function() {
    const subjectTitle = table.querySelector('.subjectTitle');
    subjectTitle.textContent = subject.name;
  };

  var attachOnOffOptionalEvents = function() {
    const optionalSubjectButtonContainer = table.querySelector('.optionalSubject');
    onOff.attachOnOffSelectorEvents(optionalSubjectButtonContainer, switchSubjectIsOptional);
  };

  var addSubjectIsOptional = function() {
    if (subject.isOptional) {
      const onButton = table.querySelector('.optionalSubject .on');
      onButton.classList.remove('inactive');
      onButton.classList.add('active');
      const offButton = table.querySelector('.optionalSubject .off');
      offButton.classList.remove('active');
      offButton.classList.add('inactive');
    }
  };

  var makeTableRows = function() {
    for (let i = 0; i < subject.schedules.length; i++) {
      new SubjectScheduleTableRow(table, subject.schedules[i]);
    }
  };

  var switchSubjectIsOptional = function(isOptional) {
    subject.isOptional = isOptional;
    foundSubject.subjectListItem.toggleOptional(isOptional);
    inscription.generateAlternatives();
    foundAlternativesController.generateDOM();
    inscription.persistSubjects();
  };

  this.showTable = function() {
    table.style.display = 'block';
  };

  this.hideTable = function() {
    table.style.display = 'none';
  };

  this.remove = function() {
    table.parentNode.removeChild(table);
  };

  init();
};

var SubjectScheduleTableRow = function(table, schedule) {
  const scheduleTableRow = {};
  let row = {};

  const init = function() {
    createRow();
    fillRowWithDays();
    attachOnOffSelectorEvents();
  };

  var createRow = function() {
    const dummyTableRow = document.querySelector('.viewSchedule.dummy tr.subjectSchedulesView');
    row = dummyTableRow.cloneNode(true); // deep
    table.querySelector('tbody').appendChild(row);
  };

  var fillRowWithDays = function() {
    for (let i = 0; i < schedule.days.length; i++) {
      const day = schedule.days[i];
      const dayField = row.querySelector(`td[class^="${day.name}"]`);
      dayField.classList.add('info');
      dayField.textContent = `${day.turn} ${day.startHour}:${day.endHour}`;
    }
  };

  var attachOnOffSelectorEvents = function() {
    onOff.attachOnOffSelectorEvents(row, switchScheduleActiveness);
  };

  function switchScheduleActiveness(onButtonIsActive) {
    if (onButtonIsActive) {
      row.classList.remove('inactive');
    } else {
      row.classList.add('inactive');
    }
    schedule.active = onButtonIsActive;
    inscription.generateAlternatives();
    foundAlternativesController.generateDOM();
  }

  init();
  return scheduleTableRow;
};

var SubjectListItem = function(foundSubject) {
  const subjectListItem = {};
  let listItem = {};

  const init = function() {
    createListItem();
    createRemoveButton();
    listItem.addEventListener('click', onListItemClick);
    listItem.click();
  };

  var createListItem = function() {
    listItem = document.createElement('a');
    listItem.id = foundSubject.subject.name.replace(/\s/g, '');
    listItem.classList.add('list-group-item');
    listItem.setAttribute('href', 'javascript: void(0)');
    listItem.textContent = foundSubject.subject.name;
    const optionalText = document.createElement('span');
    optionalText.textContent = '(opcional)';
    optionalText.className = 'optionalText';
    listItem.appendChild(optionalText);
    optionalText.style.display = foundSubject.subject.isOptional ? 'inline-block' : 'none';
    const subjectItemList = document.querySelector('.subjectList .list-group');
    subjectItemList.appendChild(listItem);
    const emptyText = subjectItemList.querySelector('.empty-text');
    if (emptyText) {
      emptyText.parentNode.removeChild(emptyText);
    }
  };

  var createRemoveButton = function() {
    const removeButton = document.createElement('span');
    removeButton.classList.add('removeSubjectButton');
    removeButton.textContent = 'x';
    listItem.appendChild(removeButton);
    removeButton.addEventListener('click', onRemoveButtonClicked);
  };

  var onRemoveButtonClicked = function(event) {
    event.stopPropagation();
    if (confirm('¿Estás seguro que querés eliminar esta materia?')) {
      removeSubjectFromInscription();
      removeSubjectFromFoundSubjects();
      reGenerateFoundAlternatives();
    }
  };

  var onListItemClick = function() {
    // Unhighlight others
    foundSubjectsController.unSelectListItems();
    // Highlight item
    subjectListItem.select();
    // Hide other tables
    foundSubjectsController.hideTables();
    // Show this table
    foundSubject.subjectScheduleTable.showTable();
  };

  var removeSubjectFromInscription = function() {
    const subjectIndex = inscription.subjects.indexOf(foundSubject.subject);
    inscription.subjects.splice(subjectIndex, 1);
    inscription.generateAlternatives();
    inscription.persistSubjects();
  };

  var removeSubjectFromFoundSubjects = function() {
    listItem.parentNode.removeChild(listItem);
    foundSubject.subjectScheduleTable.remove();
    const subjectItemList = document.querySelector('.subjectList .list-group');
    const remainingSubjectListItems = subjectItemList.querySelectorAll('.list-group-item');
    if (!remainingSubjectListItems.length) {
      const emptyText = document.createElement('div');
      emptyText.classList.add('empty-text');
      emptyText.textContent = 'No hay materias';
      subjectItemList.appendChild(emptyText);
    }
    foundSubjectsController.removeFromList(foundSubject);
    foundSubjectsController.unSelectListItems();
    foundSubjectsController.selectFirstSubject();
  };

  var reGenerateFoundAlternatives = function() {
    foundAlternativesController.generateDOM();
  };

  subjectListItem.select = function() {
    listItem.classList.add('active');
  };

  subjectListItem.unselect = function() {
    listItem.classList.remove('active');
  };

  subjectListItem.toggleOptional = function(isOptional) {
    const optionalText = listItem.querySelector('.optionalText');
    optionalText.style.display = isOptional ? 'inline-block' : 'none';
  };

  init();
  return subjectListItem;
};
