export interface Home {
  id: number,
  name: string,
  title: string,
  image: string,
  price: number,
  detail: Detail

}

export interface Detail{
  bedroom: number,
  bathroom: number,
  area: number,
  parking: number,
  floor: number
}
