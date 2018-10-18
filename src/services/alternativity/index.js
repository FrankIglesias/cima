import './subject.js';
import inscription from './inscription.js';
import './foundSubjectsController.js';
import foundAlternativesController from './foundAlternativesController.js';
import './updates.js';

const defaultMockSubjets = /*[{ "name": "Administracion Gerencial", "shortName": "T", "color": "#69b717", "schedules": [{ "days": [{ "name": "Lu", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }, { "days": [{ "name": "Mi", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }], "isOptional": false, "errorLog": "" },
{ "name": "Inteligencia Artificial", "shortName": "IA", "color": "#69b717", "schedules": [{ "days": [{ "name": "Lu", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }, { "days": [{ "name": "Mi", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }], "isOptional": false, "errorLog": "" }];
*/
[{ "name": "Paradigmas de Programación", "shortName": "PDP", "color": "#69b717", "schedules": [{ "days": [{ "name": "Lu", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }, { "days": [{ "name": "Mi", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }], "isOptional": false, "errorLog": "" },
{ "name": "Análisis Matemático II", "shortName": "AMII", "color": "#69b717", "schedules": [{ "days": [{ "name": "Ju", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true  }], "isOptional": false, "errorLog": "" },
{ "name": "Sintaxis y semántica de los lenguajes", "shortName": "SINSENLEN", "color": "#69b717", "schedules": [{ "days": [{ "name": "Lu", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }, { "days": [{ "name": "Mi", "turn": "n", "startHour": 1, "endHour": 5 }], "active": true }], "isOptional": false, "errorLog": "" },
{ "name":"Análisis de Sistemas","shortName":"SEAR","color":"#69b717","schedules":[{"days":[{"name":"Ma","turn":"n","startHour":1,"endHour":5}],"active":true},{"days":[{"name":"Lu","turn":"n","startHour":1,"endHour":5}],"active":true}],"isOptional":false,"errorLog":""}];


export const generateAlternatives = (subjects = defaultMockSubjets) => {
  inscription.subjects = subjects;
  inscription.generateAlternatives();
  foundAlternativesController.generateDOM();
  return inscription.alternatives.map((alt, index) => ({title: "Alternativa " + (index + 1), schedules: alt.schedules.map(mat => ({ materia: mat.subject.name, days: mat.schedule.days}))}));
}