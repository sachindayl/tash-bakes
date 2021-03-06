<template>
  <div
    class="max-w-md px-8 py-4 mx-auto bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
  >
    <div class="flex justify-center -mt-16 md:justify-end">
      <img
        class="object-cover w-20 h-20 border-2 border-orange-500 rounded-full dark:border-orange-400"
        alt="Testimonial avatar"
        :src="imageUrl"
      />
    </div>

    <h2
      class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl"
    >
      {{ testimonial.subject }}
    </h2>

    <p class="mt-2 text-gray-600 dark:text-gray-200 text-left">
      {{ testimonial.message }}
    </p>

    <div class="flex justify-end mt-4">
      <a
        href="#"
        class="text-xl font-medium text-orange-500 dark:text-orange-300"
        >{{ testimonial.customerName }}</a
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

  async mounted() {
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

<style scoped></style>
