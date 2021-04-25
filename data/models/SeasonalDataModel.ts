import { SeasonalDataI } from '~/data/interfaces/SeasonalDataI'

export class SeasonalDataModel implements SeasonalDataI {
  readonly caption: string
  readonly image: string
  readonly isVisible: boolean
  readonly name: string
  readonly price: string
  readonly type: string
  readonly colour: string
  readonly colour2: string

  constructor(name: string, caption: string, price: string, isVisible: boolean, image: string, type: string, colour: string, colour2: string) {
    this.name = name
    this.caption = caption
    this.price = price
    this.isVisible = isVisible
    this.image = image
    this.type = type
    this.colour = colour
    this.colour2 = colour2
  }
}