import './subject.js';
import inscription from './inscription.js';
import './foundSubjectsController.js';
import foundAlternativesController from './foundAlternativesController.js';

import * as TimeService from '../TimeService';
import './updates.js';

const defaultMockSubjets = [
  {
    name: 'Paradigmas de Programación',
    shortName: 'PDP',
    color: '#69b717',
    schedules: [
      { days: [{ name: 'Lu', turn: 'n', startHour: 2, endHour: 5 }], active: true },
      { days: [{ name: 'Mi', turn: 'n', startHour: 1, endHour: 3 }], active: true }
    ],
    isOptional: false,
    errorLog: ''
  },
  {
    name: 'Análisis Matemático II',
    shortName: 'AMII',
    color: '#69b717',
    schedules: [{ days: [{ name: 'Ju', turn: 'n', startHour: 1, endHour: 5 }], active: true }],
    isOptional: false,
    errorLog: ''
  },
  {
    name: 'Sintaxis y semántica de los lenguajes',
    shortName: 'SINSENLEN',
    color: '#69b717',
    schedules: [
      { days: [{ name: 'Lu', turn: 'n', startHour: 1, endHour: 5 }], active: true },
      { days: [{ name: 'Mi', turn: 'm', startHour: 1, endHour: 5 }], active: true }
    ],
    isOptional: false,
    errorLog: ''
  },
  {
    name: 'Análisis de Sistemas',
    shortName: 'ANASIS',
    color: '#69b717',
    schedules: [
      { days: [{ name: 'Ma', turn: 'n', startHour: 1, endHour: 5 }], active: true },
      { days: [{ name: 'Lu', turn: 't', startHour: 1, endHour: 5 }], active: true }
    ],
    isOptional: false,
    errorLog: ''
  }
];

const alternativitySerializer = (alt, index) => ({
  title: `Alternativa ${index + 1}`,
  schedules: alt.schedules.map(mat => ({
    materia: mat.subject.name,
    days: mat.schedule.days
  }))
});

const days = {
  Lunes: 'Lu',
  Martes: 'Ma',
  Miercoles: 'Mi',
  Jueves: 'Ju',
  Viernes: 'Vi',
  Sabado: 'Sa'
};

const generateBasicAvailability = () => ({
  Lu: { m: true, t: true, n: true },
  Ma: { m: true, t: true, n: true },
  Mi: { m: true, t: true, n: true },
  Ju: { m: true, t: true, n: true },
  Vi: { m: true, t: true, n: true },
  Sa: { m: true, t: true, n: true }
});

export const generateAlternatives = (subjects = defaultMockSubjets, blockedDays) => {
  const blocked = generateBasicAvailability();
  inscription.subjects = subjects;
  Object.keys(blockedDays).forEach(day => {
    TimeService.convertHourToNumber(blockedDays[day].startTime, blockedDays[day].endTime).forEach(time => {
      blocked[days[day]][time] = false;
    });
  });
  inscription.availableTurnsInDays = blocked;
  inscription.generateAlternatives();
  foundAlternativesController.generateDOM();
  return inscription.alternatives.map(alternativitySerializer);
};

export const generateSavedAlternatives = (subjects = savedMockSubjets) => {
  inscription.subjects = subjects;
  inscription.generateAlternatives();
  foundAlternativesController.generateDOM();
  return inscription.alternatives.map((alt, index) => ({
    title: `Alternativa ${index + 1}`,
    schedules: alt.schedules.map(mat => ({ materia: mat.subject.name, days: mat.schedule.days }))
  }));
};
