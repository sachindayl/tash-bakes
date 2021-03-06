<template>
  <section
    class="md:mb-24 mt-12 my-6 md:p-4 py-12 flex flex-col justify-center"
    :style="heightStyle"
  >
    <h2
      class='subs-title animate-wiggle p-4 pb-12 text-3xl font-semibold text-center text-gray-800 dark:text-white'
    >
      Testimonials
    </h2>
    <div
      class="p-4 m-4 flex flex-wrap content-center flex-col md:flex-row justify-center items-center"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.customerName + index"
        class="py-12 px-4"
      >
        <Testimonial :testimonial-data.sync="testimonial"></Testimonial>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TestimonialI } from '../pages/index.vue'

@Component
export default class Testimonials extends Vue {
  get heightStyle() {
    if (process.client) {
      const width = window.innerWidth
      if (width < 600) {
        return 'height: 900px'
      } else if (width < 1000) {
        return 'height: 800px'
      } else if (width < 1200) {
        return 'height: 700px'
      }
      return 'height: 500px'
    }
    return ''
  }

  get testimonials(): TestimonialI[] {
    return [
      {
        customerName: 'Sophia Sareen',
        subject: '',
        message:
          '"The best cupcakes I\'ve had. They went above and beyond my expectations! Beautiful colours and arrived on time."',
        image:
          'IMG_8504.jpg',
      },
      {
        customerName: 'Kavina Sivasothy',
        subject: '',
        message:
          '"Absolutely loved these cupcakes!! Beautifully decorated and tasted delicious. Can’t wait to order more from her!"',
        image:
          'IMG_5809.webp',
      },
    ]
  }
}
</script>

<style scoped></style>
