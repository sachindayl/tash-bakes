<template>
  <div
    class="mt-4 mb-24 mx-auto w-full bg-fixed flex flex-col justify-center object-center"
    :style="backgroundImage.products"
  >
    <div :class="titleClass">Products</div>
    <div
      class="flex flex-col md:flex-row items-center justify-center max-w-sm mx-auto gap-12"
    >
      <div v-for="product in products">
        <Product :products-data.sync="product"></Product>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ProductI } from '../pages/index.vue'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class Products extends Vue {
  imageUrl = ''
  titleClass =
    'subs-title animate-wiggle p-4 pb-12 text-3xl font-semibold text-center'

  async mounted() {
    await this.retrieveImageUrl()
  }

  async retrieveImageUrl() {
    if (process.client) {
      const width = window.innerWidth
      const firebaseService = new FirebaseService(this.$fire)
      this.imageUrl = await firebaseService.retrieveImage(
        'gallery',
        width < 600 ? 'IMG_3782_8.webp' : 'IMG_3782_7.webp'
      )
    }
  }

  get heightStyle() {
    if (process.client) {
      const width = window.innerWidth
      return width < 600 ? 'height: 900px' : 'height: 700px'
    }
    return ''
  }

  get backgroundImage() {
    if (process.client) {
      const width = window.innerWidth
      let image = {}
      if (width < 600) {
        image = {
          products: `backgroundImage: url(${this.imageUrl});height: 900px; background-repeat: no-repeat; width:100%;
         -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover; -webkit-transform: translateZ(0);
`,
        }
      } else {
        image = {
          products: `backgroundImage: url(${this.imageUrl});height: 700px; background-repeat: no-repeat; width:100%;
          -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover; -webkit-transform: translateZ(0);
`,
        }
      }
      this.titleClass =
        'subs-title-white animate-wiggle p-4 pb-12 text-3xl font-semibold text-center'
      return image
    }
    return {}
  }

  get products(): ProductI[] {
    return [
      {
        name: 'Cupcakes',
        image: 'IMG_4826_1.webp',
        price: '$20',
      },
      {
        name: 'Cakes',
        image: 'IMG_6156_1.webp',
        price: '$60',
      },
    ]
  }
}
</script>

<style scoped></style>
