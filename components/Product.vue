<template>
  <div class="flex justify-center flex-col text-center p-4">
    <div
      class="h-32 md:h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
      :style="backgroundImage"
    ></div>

    <div
      class="w-56 -mt-10 mx-auto justify-center overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
    >
      <h3
        class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
      >
        {{ products.name }}
      </h3>

      <div
        class="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700"
      >
        <span class="font-bold text-gray-800 dark:text-gray-200"
          >Starting from {{ products.price }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'nuxt-property-decorator'
import { ProductI } from '~/pages/index.vue'

@Component
export default class Product extends Vue {
  @PropSync('productsData', {
    type: Object as () => ProductI,
  })
  readonly products!: ProductI

  get backgroundImage() {
    if (process.client) {
      const width = window.innerWidth
      if (width < 600) {
        return `backgroundImage: url(${this.products.url}) ; width: 250px`
      } else if (width < 1000) {
        return `backgroundImage: url(${this.products.url}) ; width: 325px`
      }
      return `backgroundImage: url(${this.products.url}) ; width: 425px`
    }
  }
}
</script>

<style scoped></style>
