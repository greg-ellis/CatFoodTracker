/** 
* Creates a new Feeding object.
*/
export const feeding = (timestamp, upc, eaten) => {
  return {
    timestamp: timestamp,
    upc: upc,
    initialReaction: null,
    eaten: eaten
  }
}