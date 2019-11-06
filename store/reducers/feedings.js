import { ADD_FEEDING, EDIT_FEEDING } from '../actions/feedings';

const initialState = {feedings: []}

const feedingsReducer = (state = initialState, action) => {
  console.log('feedingsReducer hit', action)
  switch (action.type) {
    case ADD_FEEDING:
      const feedings = state.feedings
      feedings.push(action.feeding)
      console.log('new feedings state:', feedings)
      return { ...state, feedings: feedings }
    case EDIT_FEEDING:
      return state
    default:
      return state
  }
}

export default feedingsReducer