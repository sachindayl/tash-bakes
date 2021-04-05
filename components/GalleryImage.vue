<template>
  <div
    class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
    <img class="object-cover w-full h-56" :src="imageData.image" alt="avatar" />

    <div class="py-5 text-center">
      <a
        href="#"
        class="block text-2xl font-bold text-gray-800 dark:text-white capitalize"
        >{{ imageData.name }}</a
      >
      <span class="text-sm text-gray-700 dark:text-gray-200"
        >$5</span
      >
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
}
</script>

<style lang="scss" scoped></style>
