<template>
  <div
    class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
    <img class="object-cover w-full h-56" :data-src="imageData.image" alt="avatar" v-lazy-load/>

    <div class="py-5 text-center">
      <a
        href="#"
        class="block text-2xl font-bold text-gray-800 dark:text-white capitalize p-2"
        >{{ imageData.name }}</a
      >
      <div v-if="imageData.category === 'cupcakes'">
        <div class="grid grid-cols-2 divide-x divide-black-500 px-0 sm:px-6 py-2">
          <div class="text-sm text-gray-700 dark:text-gray-200 p-2">
            6 pack: {{ imageData.price.cupcake[0] }}
          </div>
          <div class='text-sm text-gray-700 dark:text-gray-200 p-2'>
            12 pack: {{ imageData.price.cupcake[1] }}
          </div>
        </div>
      </div>
      <div v-else>
        <span class="text-sm text-gray-700 dark:text-gray-200">{{
          imageData.price.cake[0]
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator'
import { ImageDataModel } from '~/data/models/ImageDataModel'

@Component
export default class GalleryImage extends Vue {
  @PropSync('imageDataItem', {
    type: Object as () => ImageDataModel,
  })
  imageData!: ImageDataModel

  // get cakePrice() {
  //   return this.imageData.price.cake.length > 0
  //     ? this.imageData.price.cake
  //     : []
  // }
  //
  // get cupcakePrice() {
  //   return this.imageData.price.cupcake?.length > 0
  //     ? this.imageData.price.cupcake
  //     : []
  // }
}
</script>

<style lang="scss" scoped></style>
