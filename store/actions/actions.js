export const ADD_FOOD = 'ADD_FOOD'
export const EDIT_FOOD = 'EDIT_FOOD'
export const ADD_FEEDING = 'ADD_FEEDING'
export const EDIT_FEEDING = 'EDIT_FEEDING'

export const addFood = (food) => {
  return { type: ADD_FOOD, food: food}
}
export const editFood = (food) => {
  return { type: ADD_FOOD, food: food}
}

export const addFeeding = (feeding) => {
  return { type: ADD_FEEDING, feeding: feeding}
}
export const editFeeding = (feeding) => {
  return { type: EDIT_FEEDING, feeding: feeding}
}
