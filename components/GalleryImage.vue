<template>
  <div
    class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
    <div v-if="loading">
      <SpinnerDoubleBounce></SpinnerDoubleBounce>
    </div>
    <div v-else>
      <img
        class="object-cover w-full h-56"
        :data-src="image"
        alt="avatar"
        v-lazy-load
      />
    </div>

    <div class="py-5 text-center">
      <a
        href="#"
        class="block text-2xl font-bold text-gray-800 dark:text-white capitalize p-2"
        >{{ imageData.name }}</a
      >
      <div v-if="imageData.category === 'cupcakes'">
        <div
          class="grid grid-cols-2 divide-x divide-black-500 px-0 sm:px-6 py-2"
        >
          <div class="text-sm text-gray-700 dark:text-gray-200 p-2">
            6 pack: {{ imageData.price.cupcake[0] }}
          </div>
          <div class="text-sm text-gray-700 dark:text-gray-200 p-2">
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
import { FirebaseService } from '~/services/FirebaseService'
import { ImageDataModel } from '~/data/models/ImageDataModel'

@Component
export default class GalleryImage extends Vue {
  @PropSync('imageDataItem', {
    type: Object as () => ImageDataModel,
  })
  imageData!: ImageDataModel
  loading = true
  firebaseService: FirebaseService = new FirebaseService(this.$fire);

  async mounted() {
    if (process.client) {
      try {
        await this.retrieveImage()
      } catch (e) {
        console.log(e)
      }
    }
  }

  async retrieveImage() {

    this.imageData.image = await this.firebaseService.retrieveImage(
      this.imageData.category,
      this.imageData.imageFilename
    )
    this.loading = false
  }

  get image() {
    return this.imageData.image
  }
}
</script>

<style lang="css" scoped>
</style>
