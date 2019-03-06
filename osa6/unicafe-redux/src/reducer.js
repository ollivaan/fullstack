const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action, 'action')
  console.log(state, 'state')
  console.log(state.good, 'state.good')
  // const key = action.type.toLowerCase()
  // return {
  //   ...state,
  //   [key]: state[key]+1
  // }

  switch (action.type) {
    case 'GOOD':
    console.log("state", state)
      return {...state, good: state.good+1}
    case 'OK':
      return {...state, ok: state.ok+1}
    case 'BAD':
      return {...state, bad: state.bad+1}
    case 'ZERO':
      return {...state, good: state.good=0, ok: state.ok=0, bad: state.bad=0}
    default: return state
  }
  
}

export default counterReducer