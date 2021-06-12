<template>
  <div
    class="max-w-md px-8 py-4 mx-auto bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
  >
    <div class="flex justify-center -mt-16 md:justify-end">
      <img
        class="object-cover w-20 h-20 border-2 border-primary rounded-full dark:border-red-300"
        alt="Testimonial avatar"
        :src="imageUrl"
      />
    </div>

    <p class="mt-2 text-gray-600 dark:text-gray-200 text-left">
      {{ testimonial.message }}
    </p>

    <div class="flex justify-end mt-4">
      <a
        href="#"
        class="text-xl font-medium text-primary dark:text-orange-300"
        >{{ testimonial.name }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator'
import { TestimonialI } from '~/pages/index.vue'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class Testimonial extends Vue {
  @PropSync('testimonialData', {
    type: Object as () => TestimonialI,
  })
  readonly testimonial!: TestimonialI
  imageUrl = require('assets/placeholder.png')

  async fetch() {
    if (process.client) {
      await this.retrieveImageUrl()
    }
  }

  async retrieveImageUrl() {
    const firebaseService = new FirebaseService(this.$fire)
    const firebaseImageUrl = await firebaseService.retrieveImage(
      'testimonials',
      this.testimonial.image
    )
    if (firebaseImageUrl !== '' && firebaseImageUrl != undefined) {
      this.imageUrl = firebaseImageUrl
    }
  }
}
</script>

<style lang='css' scoped>
</style>
