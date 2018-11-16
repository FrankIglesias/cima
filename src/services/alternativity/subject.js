const subjectColors = {
  availableColors: ['#75CAEB', '#A01CFF', '#FF851B', '#28B62C', '#158CBA', '#FF4136'],
  getColor() {
    if (this.availableColors.length) {
      return this.availableColors.pop();
    }
    // random color
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
};

const Day = function(params) {
  this.name = params.name || ''; // Lu,Ma,Mi,Ju,Vi,Sá
  this.turn = params.turn || ''; // m, t, n
  this.startHour = params.startHour || 1;
  this.endHour = params.endHour || 5;
};

const Schedule = function() {
  this.days = [];
  this.active = true;
};

const Subject = function(params) {
  const subject = {};
  const schedulesText = cleanAccents(params.schedules); // Esto es por "Sábado"
  subject.name = params.name || '';
  subject.shortName = makeShortName();
  subject.color = subjectColors.getColor();
  subject.schedules = [];
  subject.isOptional = params.isOptional || false;
  subject.errorLog = '';

  function parseSchedulesText() {
    const lines = schedulesText.match(/.+/gm);
    if (!lines || !lines.length) {
      logEmptyTextError();
      return;
    }
    for (let i = 0; i < lines.length; i++) {
      const schedule = new Schedule();
      const days = lines[i].split(' ');
      if (!days || !days.length) {
        logError();
        return;
      }
      for (let j = 0; j < days.length; j++) {
        const parsedDay = /(Lu|Ma|Mi|Ju|Vi|Sa)\s*\((m|t|n)\)(\d):(\d)/g.exec(days[j]);
        if (!parsedDay || parsedDay.length < 5) {
          logBadFormatError(days[j], lines[i]);
          return;
        }
        const day = new Day({
          name: parsedDay[1],
          turn: parsedDay[2],
          startHour: parseInt(parsedDay[3], 10),
          endHour: parseInt(parsedDay[4], 10)
        });
        schedule.days.push(day);
      }
      subject.schedules.push(schedule);
    }
  }

  function logEmptyTextError() {
    subject.errorLog =
      "No se pudo encontrar ningún horario. Ingresá los horarios en el campo 'Horarios de materia'";
  }

  function logBadFormatError(day, line) {
    subject.errorLog = `Hubo un error al leer el día '${day}' en la siguiente línea: '${line}'. Ingresá los horarios con la forma 'Lu(n)0:5'`;
  }

  function cleanAccents(text) {
    if (text) {
      return text
        .replace(/\u00E1/g, 'a')
        .replace(/\u00E9/g, 'e')
        .replace(/\u00ED/g, 'i')
        .replace(/\u00F3/g, 'o')
        .replace(/\u00FA/g, 'u');
    }
    return '';
  }

  function makeShortName() {
    const accentTranslations = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
      Á: 'A',
      É: 'E',
      Í: 'I',
      Ó: 'O',
      Ú: 'U'
    };
    const cleanName = subject.name.replace(/[á,é,í,ó,ú,Á,É,Í,Ó,Ú]/g, match => accentTranslations[match]);
    return cleanName
      .match(/\b(\w)|[A-Z]/g)
      .join('')
      .toUpperCase();
  }

  parseSchedulesText();
  return subject;
};
