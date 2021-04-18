<template>
  <section
    class="md:mb-12 mt-12 my-6 md:p-4 py-12 flex flex-col justify-center"
    :style="heightStyle"
  >
    <h2
      class="subs-title animate-wiggle p-4 pb-12 text-3xl font-semibold text-center text-gray-800 dark:text-white"
    >
      Testimonials
    </h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <client-only placeholder="Loading...">
        <div class="p-12 m-4 content-center justify-center items-center">
          <agile
            :slidesToShow="isMobile ? 1 : 3"
            :dots="false"
            :centerMode="true"
          >
            <div
              v-for="(testimonial, index) in testimonialList"
              :key="testimonial.name + index"
              class="py-12 px-4 slide"
            >
              <Testimonial :testimonial-data="testimonial"></Testimonial>
            </div>
            <template slot="prevButton"
              ><button class="p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                  />
                </svg></button
            ></template>
            <template slot="nextButton"
              ><button class="p-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg></button
            ></template>
          </agile>
        </div>
      </client-only>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TestimonialI } from '../pages/index.vue'
import { TestimonialModel } from '~/data/models/TestimonialModel'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class Testimonials extends Vue {
  testimonialList: TestimonialModel[] = []
  loading = true

  async mounted() {
    if (process.client) {
      await this.retrieveTestimonials()
    }
  }

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

  get isMobile() {
    if (process.client) {
      return window.innerWidth < 640
    }
    return false
  }

  private async retrieveTestimonials() {
    const firebaseService = new FirebaseService(this.$fire)
    this.testimonialList = await firebaseService.retrieveTestimonials()
    this.loading = false
  }
}
</script>

<style scoped></style>
