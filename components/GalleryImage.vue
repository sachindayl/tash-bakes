<template>
  <div
    class='max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'
    @click='itemImageUrl(imageUrl)'
  >
    <div v-if='loading' class='text-center'>
      <SpinnerDoubleBounce></SpinnerDoubleBounce>
    </div>
    <div v-else>
      <img
        class='object-cover w-full h-56'
        :data-src='image'
        alt='baked goodness'
        v-lazy-load
      />
    </div>

    <div class='py-5 text-center'>
      <div
        class='block text-2xl font-bold text-gray-800 dark:text-white capitalize p-2'
      >
        {{ imageData.name }}
      </div>
      <div v-if="imageData.category === 'cupcakes'">
        <div
          class='grid grid-cols-2 divide-x divide-black-500 px-0 sm:px-6 py-2'
        >
          <div class='text-sm text-gray-700 dark:text-gray-200 p-2'>
            6 pack: ${{ imageData.price.cupcake[0] }}
          </div>
          <div class='text-sm text-gray-700 dark:text-gray-200 p-2'>
            12 pack: ${{ imageData.price.cupcake[1] }}
          </div>
        </div>
      </div>
      <div v-else>
        <span
          v-show="imageData.price.cake[0] !== ''"
          class='text-sm text-gray-700 dark:text-gray-200'
        >${{ imageData.price.cake[0] }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Emit, PropSync, Vue } from 'nuxt-property-decorator'
import { FirebaseService } from '~/services/FirebaseService'
import { ImageDataModel } from '~/data/models/ImageDataModel'
const config = require('~/nuxt.config.js')

@Component
export default class GalleryImage extends Vue {
  @PropSync('imageDataItem', {
    type: Object as () => ImageDataModel
  })
  imageData!: ImageDataModel
  loading = true
  firebaseService: FirebaseService = new FirebaseService(this.$fire)
  imageUrl = require('assets/placeholder.png')

  async mounted() {
    try {
      if (process.client) {
        await this.retrieveImage()
      }
    } catch (e) {
      if (config.isDev) {
        console.log(e)
      }

    }
  }

  // async mounted() {
  //   if (process.client) {
  //
  //   }
  // }

  async retrieveImage() {
    this.imageData.image = await this.firebaseService.retrieveImage(
      this.imageData.category,
      this.imageData.imageFilename
    )
    if (this.imageData.image !== '' && this.imageData.image != undefined) {
      this.imageUrl = this.imageData.image
    }
    this.loading = false
  }

  get image() {
    return this.imageUrl
  }

  @Emit()
  itemImageUrl(imageUrl: string) {
    return 10
  }
}
</script>

<style lang='css' scoped></style>
