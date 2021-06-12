import { TestimonialI } from '~/pages/index.vue'

export class TestimonialModel implements TestimonialI {
  name: string
  image: string
  message: string

  constructor(name: string, image: string, message: string) {
    this.name = name
    this.image = image
    this.message = message
  }
}
