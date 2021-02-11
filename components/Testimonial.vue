<template>
  <div
    class="max-w-md px-8 py-4 mx-auto bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
  >
    <div class="flex justify-center -mt-16 md:justify-end">
      <img
        class="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
        alt="Testimonial avatar"
        :src="testimonial.image"
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
        class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
        >{{ testimonial.customerName }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator'
import { TestimonialI } from '~/pages/index.vue'

@Component
export default class Testimonial extends Vue {
  @PropSync('testimonialData', {
    type: Object as () => TestimonialI,
  })
  readonly testimonial!: TestimonialI
}
</script>

<style scoped></style>
