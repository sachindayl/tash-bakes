import { PriceDataI } from '~/data/interfaces/priceDataI'

export interface ImageDataI {
  category: string
  name: string
  imageFilename: string
  image?: string
  price: PriceDataI
}
