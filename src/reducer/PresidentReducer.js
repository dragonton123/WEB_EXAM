const PresidentReducer = (state = {
resultpresident:[]
},action) =>{
  switch(action.type) {
    case "FETCH_PRESIDENT":
    state={
      ...state,
        resultpresident : action.payload
    };
    case "FETCH_PRESIDENT_FULFILLED":
    state={
      ...state,
        resultpresident : action.payload
    };

    break;

    default:
      break;
  }
  return state;
};
export default PresidentReducer
