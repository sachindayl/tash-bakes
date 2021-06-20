<template>
  <div>
    <div class='container mx-auto mt-20 mb-10'>
      <div
        class='w-full h-full fixed block top-0 left-0 bg-white opacity-90 z-50'
        v-if='loading'
      >
        <NavBar2></NavBar2>
        <Spinner></Spinner>
      </div>
      <div v-else class='w-full h-full'>
        <NavBar2></NavBar2>
        <Modal v-if='showModal' :image-url='imageUrl' @close='showModal = false'></Modal>
        <div
          class='subs-title animate-wiggle pt-8 pb-10 text-center block text-4xl font-bold text-gray-800 dark:text-white'
        >
          Cakes
        </div>
        <div class='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-2'>
          <div
            v-for='(item, index) in cakesList'
            class='p-2'
            :key='item.name + index'
          >
            <GalleryImage
              :image-data-item.sync='item'
              @item-image-url='getModalImageUrl'
            ></GalleryImage>
          </div>
        </div>
        <div
          class='subs-title animate-wiggle py-10 text-center block text-4xl font-bold text-gray-800 dark:text-white'
        >
          Cupcakes
        </div>
        <div class='grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-2'>
          <div
            v-for='(item, index) in cupcakesList'
            class='p-2'
            :key='item.name + index'
          >
            <GalleryImage :image-data-item.sync='item'></GalleryImage>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { FirebaseService } from '~/services/FirebaseService'
import { ImageDataI } from '~/data/interfaces/ImageDataI'

@Component
export default class Gallery extends Vue {
  loading = true
  showModal = false
  cakesList: ImageDataI[] = []
  cupcakesList: ImageDataI[] = []
  imageUrl = require(`@${process.env.imagePath}/placeholder.png`)

  async mounted() {
    if (process.client) {
      await this.retrieveImageData()
    }
  }

  async retrieveImageData() {
    const firebaseService = new FirebaseService(this.$fire)
    const cakes = await firebaseService.retrieveImageInfo('cakes')
    const cupcakes = await firebaseService.retrieveImageInfo('cupcakes')
    this.cakesList = cakes
    this.cupcakesList = cupcakes

    this.loading = false
  }

  getModalImageUrl(imageUrl: string) {
    console.log(imageUrl)
    this.imageUrl = imageUrl
    this.showModal = true
  }
}
</script>

<style lang='postCss' scoped></style>
