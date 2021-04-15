<template>
  <div
    class="mt-4 mb-24 mx-auto w-full bg-fixed flex flex-col justify-center object-center"
    :style="backgroundImage"
  >
    <div :class="titleClass">Products</div>
    <div
      class="flex flex-col md:flex-row items-center justify-center max-w-sm mx-auto gap-12"
    >
      <div v-for="product in products">
        <ProductSectionItem :products-data.sync="product"></ProductSectionItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ProductI } from '../pages/index.vue'

@Component
export default class Products extends Vue {
  titleClass =
    'subs-title animate-wiggle p-4 pb-12 text-3xl font-semibold text-center text-white'

  async mounted() {}

  get backgroundImage() {
    if (process.client) {
      const width = window.innerWidth
      if (width < 600) {
        return {
          background: 'url(' + require('@/assets/aqua.webp') + ')',
          height: '900px',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          backgroundSize: 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
          '-o-background-size': 'cover',
          '-webkit-transform': 'translateZ(0)',
        }
      } else {
        return {
          backgroundImage: 'url(' + require('@/assets/aqua.webp') + ')',
          height: '700px',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          backgroundSize: 'cover',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
          '-o-background-size': 'cover',
          '-webkit-transform': 'translateZ(0)',
        }
      }
    }
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
