<template>
  <section
    class="bg-white dark:bg-gray-800 p-12 flex flex-col justify-center"
    :style="heightStyle"
  >
    <div class="container mx-auto px-6 py-8">
      <div class="lg:flex items-center">
        <div class="lg:w-1/2">
          <h2
            class="subs-title lg:max-w-md animate-wiggle text-center text-gray-800 dark:text-gray-100 text-3xl font-bold"
          >
            About Me
          </h2>

          <p
            class="text-center md:text-justify text-gray-500 dark:text-gray-400 lg:max-w-md mt-4"
          >
            Hello! Welcome to my page! My name is Hithasha and I am a university
            student in Kitchener, Ontario. I started baking as a hobby and
            taught myself to make a variety of cakes and cupcakes over the
            years. All my friends and family would always ask me to bake and
            decorate cakes and cupcakes for their celebrations. Baking for me is
            still a hobby as I am still in school and it is something that I
            enjoy very much. I still learn everyday especially when my clients
            give me challenging themes and designs to decorate cakes and
            cupcakes.
          </p>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-1/2">
          <div class="flex items-center justify-center lg:justify-end">
            <div class="max-w-lg">
              <img
                class="w-full h-64 object-cover object-center rounded-md shadow"
                :src="imageUrl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class About extends Vue {
  imageUrl = require('assets/placeholder.png')
  async mounted() {
    if (process.client) {
      await this.retrieveImage()
    }
  }

  get heightStyle() {
    if (process.client) {
      const width = window.innerWidth
      return width < 600 ? 'height: 900px' : 'height: 500px'
    }
    return ''
  }

  async retrieveImage() {
    const firebaseImageUrl = await new FirebaseService(
      this.$fire
    ).retrieveImage('testimonials', 'IMG_7659.jpg')
    if (firebaseImageUrl !== '' && firebaseImageUrl != undefined) {
      this.imageUrl = firebaseImageUrl
    }
  }
}
</script>

<style scoped></style>
