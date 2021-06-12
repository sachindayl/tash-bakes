import { PriceDataI } from '~/data/interfaces/priceDataI'

export class PriceDataModel implements PriceDataI {
  cake: string[]
  cupcake: string[]

  constructor(cakePrice: string[], cupcakePrice: string[]) {
    this.cake = cakePrice
    this.cupcake = cupcakePrice
  }
}
