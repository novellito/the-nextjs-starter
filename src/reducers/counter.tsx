const initialState = {
  count: 0
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      };
    case 'SUBTRACT':
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

export default reducer;
