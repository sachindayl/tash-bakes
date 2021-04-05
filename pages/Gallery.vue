<template>
  <div>
    <NavBar2></NavBar2>
    <div class="container mx-auto mt-20 mb-10">
      <div
        class="w-full h-full fixed block top-0 left-0 bg-white opacity-90 z-50"
        v-if="loading"
      >
        <Spinner></Spinner>
      </div>
      <div v-else class="w-full h-full">
        <div
          class="pt-4 pb-10 text-center block text-4xl font-bold text-gray-800 dark:text-white"
        >
          Cakes
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-2">
          <div
            v-for="(item, index) in cakesList"
            class="p-2"
            :key="item.name + index"
          >
            <GalleryImage :image-data-item.sync="item"></GalleryImage>
          </div>
        </div>
        <div
          class="py-10 text-center block text-4xl font-bold text-gray-800 dark:text-white"
        >
          Cupcakes
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-2">
          <div
            v-for="(item, index) in cupcakesList"
            class="p-2"
            :key="item.name + index"
          >
            <GalleryImage :image-data-item.sync="item"></GalleryImage>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FirebaseService } from '~/services/FirebaseService'
import { ImageDataI } from '~/data/interfaces/ImageDataI'

@Component
export default class Gallery extends Vue {
  loading = true
  cakesList: ImageDataI[] = []
  cupcakesList: ImageDataI[] = []

  async mounted() {
    if (process.client) {
      await this.retrieveImages()
    }
  }

  async retrieveImages() {
    const firebaseService = new FirebaseService(this.$fire)
    const cakes = await firebaseService.retrieveImageInfo('cakes')
    for (const item of cakes) {
      item.image = await firebaseService.retrieveImage(
        'cakes',
        item.imageFilename
      )
    }
    const cupcakes = await firebaseService.retrieveImageInfo('cupcakes')
    for (const item of cupcakes) {
      item.image = await firebaseService.retrieveImage(
        'cupcakes',
        item.imageFilename
      )
    }
    this.cakesList = cakes
    this.cupcakesList = cupcakes

    this.loading = false
  }
}
</script>

<style lang="scss" scoped></style>
