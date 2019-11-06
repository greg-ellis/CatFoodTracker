import { ADD_FOOD, EDIT_FOOD } from '../actions/foods';

const initialState = {foods: []}

const foodsReducer = (state = initialState, action) => {
  console.log('foodsReducer', action)
  switch (action.type) {
    case ADD_FOOD:
      const foods = state.foods
      foods.push(action.food)
      return { ...state, foods: foods }
    case EDIT_FOOD:
        return state
    default:
      return state
  }
  return state;
}

export default foodsReducer