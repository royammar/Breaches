
  export default function (state , action = {}) {
    switch (action.type) {
      case 'SET_BREACHES':
        return { ...state, breaches: [...state.breaches,...action.breachesItems] };
      case 'INC_OFFSET':
        return { ...state, offset:state.offset+11 };
      case 'SET_LOAD':
        return { ...state, isLoad:!state.isLoad };
      default:
        return state;
    }
  }
  