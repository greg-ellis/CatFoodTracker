/** 
* Creates a new food object.
*/
export const food = (upc, brand, title, image) => {
  return {
    upc: upc,
    brand: brand,
    title: title,
    image: image
  }
}