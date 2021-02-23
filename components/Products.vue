<template>
  <section class="mt-4 mb-24" :style="heightStyle">
    <div class="mx-auto">
      <div
        class="w-full bg-fixed bg-auto content-center flex flex-col justify-center items-center"
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
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ProductI } from '../pages/index.vue'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class Products extends Vue {
  imageUrl = ''
  titleClass = 'subs-title animate-wiggle p-4 pb-12 text-3xl font-semibold text-center'

  async mounted() {
    await this.retrieveImageUrl()
  }

  async retrieveImageUrl() {
    if (process.client) {
      const firebaseService = new FirebaseService(this.$fire)
      this.imageUrl = await firebaseService.retrieveImage(
        'gallery',
        'IMG_7762_2.jpg'
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
      if(width < 600) {
        image = {
          products: `backgroundImage: url(${this.imageUrl});height: 900px; background-repeat: no-repeat; width:100%;`,
        }
      } else {
        image = {
          products: `backgroundImage: url(${this.imageUrl});height: 700px; background-repeat: no-repeat; width:100%;`,
        }
      }
      this.titleClass = 'subs-title-white animate-wiggle p-4 pb-12 text-3xl font-semibold text-center'
      return image;
    }
    return {}
  }

  get products(): ProductI[] {
    return [
      {
        name: 'Cupcakes',
        image: 'IMG_4826_1.jpg',
        price: '$25',
      },
      {
        name: 'Cakes',
        image: 'IMG_5208_2.jpg',
        price: '$60',
      },
    ]
  }
}
</script>

<style scoped></style>
