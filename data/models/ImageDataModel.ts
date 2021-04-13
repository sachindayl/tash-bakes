import { ImageDataI } from '~/data/interfaces/ImageDataI'
import { PriceDataModel } from '~/data/models/priceDataModel'

export class ImageDataModel implements ImageDataI {
  category: string
  imageFilename: string
  name: string
  price: PriceDataModel
  image?: any

  constructor(category:string, name: string, imageFilename: string, price: PriceDataModel, image?: any ) {
    this.category = category
    this.name = name
    this.imageFilename = imageFilename
    this.image = image
    this.price = price
  }

  seImage(value: string) {
    this.image = value
  }
}
