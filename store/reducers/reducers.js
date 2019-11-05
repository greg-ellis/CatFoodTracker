import { ADD_FOOD, EDIT_FOOD, ADD_FEEDING, EDIT_FEEDING } from '../actions/actions';

const initialState = {
  foods: [],
  feedings: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const foods = state.foods
      foods.push(action.food)
      return { ...state, favoriteMeals: updatedFavMeals }
    case EDIT_FOOD:
        return state
    case ADD_FEEDING:
      const feedings = state.feedings
      feedings.push(action.feeding)
      return { ...state, feedings: feedings }
    case EDIT_FEEDING:
      return state
    default:
      return state
  }
  return state;
}

export default reducer