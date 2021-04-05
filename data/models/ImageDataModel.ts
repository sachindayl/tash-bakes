import { ImageDataI } from '~/data/interfaces/ImageDataI'

export class ImageDataModel implements ImageDataI {
  imageFilename: string
  name: string
  image?: any

  constructor(name: string, imageFilename: string, image?: any) {
    this.name = name
    this.imageFilename = imageFilename
    this.image = image
  }

  seImage(value: string) {
    this.image = value
  }
}
