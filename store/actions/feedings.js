export const ADD_FEEDING = 'ADD_FEEDING'
export const EDIT_FEEDING = 'EDIT_FEEDING'

export const addFeeding = (feeding) => {
  return { type: ADD_FEEDING, feeding: feeding}
}
export const editFeeding = (feeding) => {
  return { type: EDIT_FEEDING, feeding: feeding}
}
