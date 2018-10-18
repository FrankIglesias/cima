import { createStore } from 'redux'
import rootReducer from './LabourDays/reducer';


export default createStore(rootReducer);

// export const materiasAprobadas = (state = {materiasAprobadas: {}}, action) => {
//   switch (action.type) {
//     case 'MERGE_LABOUR_DAYS':
//       return {
//         labourDays: action.payload
//       };
//     default:
//       return state;
//   }
// }