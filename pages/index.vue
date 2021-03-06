<template>
  <div class="main-container">
    <div id="home" class="mx-auto pb-4">
      <div
        class="w-full bg-fixed flex flex-col justify-center object-center py-24"
        :style="backgroundImage.intro"
      >
        <div :class="titleStyle">Bakes by Tash</div>
        <div :class="subtitleStyle">
          Making you smile one cupcake at a time.
        </div>
      </div>
    </div>
    <About id="about"></About>
    <Products class="mb-10"></Products>
    <Testimonials></Testimonials>
    <Contact id="contact"></Contact>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FirebaseService } from '~/services/FirebaseService'

export interface ProductI {
  name: string
  image: string
  price: string
}

export interface TestimonialI {
  customerName: string
  subject: string
  message: string
  image: string
}

@Component
export default class Index extends Vue {
  imageUrl = ''
  titleStyle = 'heading animate-bounce text-center'
  subtitleStyle = '-mt-8 text-lg md:text-xl font-semibold text-center'

  async mounted() {
    await this.retrieveImageUrl()
  }

  async retrieveImageUrl() {
    if (process.client) {
      const firebaseService = new FirebaseService(this.$fire)
      this.imageUrl = await firebaseService.retrieveImage(
        'gallery',
        'IMG-5392_7.webp'
      )
    }
  }

  get backgroundImage() {
    if (process.client) {
      const image = {
        intro: `backgroundImage: url(${this.imageUrl});height: 700px; background-repeat: no-repeat; width:100%; object-fit: cover; -webkit-transform: translateZ(0); `,
      }
      this.titleStyle = 'heading animate-bounce text-center text-white'
      this.subtitleStyle =
        '-mt-8 text-lg md:text-xl font-semibold text-center text-white'
      return image
    }
    return {}
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.main-container {
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.second-title {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.heading {
  font-family: 'Playball', cursive;
  font-size: 96px;
}

@media only screen and (max-width: 600px) {
  .heading {
    font-size: 64px;
  }
}

.navbar-heading {
  font-family: 'Playball', cursive;
  font-size: 28px;
}

@media only screen and (max-width: 600px) {
  .navbar-heading {
    font-size: 24px;
  }
}

.footer-heading {
  font-family: 'Playball', cursive;
  font-size: 24px;
}

@media only screen and (max-width: 600px) {
  .footer-heading {
    font-size: 20px;
  }
}

.subs-title {
  font-family: 'Playball', cursive;
  font-size: 48px;
}

@media only screen and (max-width: 600px) {
  .subs-title {
    font-size: 36px;
  }
}

.subs-title-white {
  font-family: 'Playball', cursive;
  font-size: 48px;
  color: white !important;
}

@media only screen and (max-width: 600px) {
  .subs-title-white {
    font-size: 36px;
  }
}
</style>
