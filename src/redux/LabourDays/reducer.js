const labourDays = (state = { labourDays: {} }, action) => {
  switch (action.type) {
    case 'MERGE_LABOUR_DAYS':
      return {
        labourDays: action.payload
      };
    default:
      return state;
  }
};

export default labourDays;
