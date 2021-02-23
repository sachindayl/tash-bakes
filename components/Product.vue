<template>
  <div class="flex justify-center flex-col text-center p-4">
    <div class="w-64 md:w-128 bg-gray-300 rounded-lg object-cover">
      <img
        class="bg-center h-32 w-64 md:w-128 md:h-64 object-cover rounded-lg shadow-md"
        :src="imageUrl"
        alt="product image"
      />
    </div>

    <div
      class="w-56 -mt-10 mx-auto justify-center overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800"
    >
      <h3
        class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
      >
        {{ product.name }}
      </h3>

      <div
        class="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700"
      >
        <span class="font-bold text-gray-800 dark:text-gray-200"
          >Starting from {{ product.price }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'nuxt-property-decorator'
import { ProductI } from '~/pages/index.vue'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class Product extends Vue {
  @PropSync('productsData', {
    type: Object as () => ProductI,
  })
  readonly product!: ProductI

  imageUrl = require('assets/placeholder.png')

  async mounted() {
    if (process.client) {
      await this.retrieveImageUrl()
    }
  }

  async retrieveImageUrl() {
    if (process.client) {
      const firebaseImageUrl = await new FirebaseService(
        this.$fire
      ).retrieveImage('gallery', this.product.image)
      if (firebaseImageUrl !== '' && firebaseImageUrl != undefined) {
        this.imageUrl = firebaseImageUrl
      }
    }
  }
}
</script>

<style scoped></style>
