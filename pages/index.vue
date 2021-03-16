<template>
  <div class='main-container'>
    <div v-if='loading'>

      <div class='h-full align-middle justify-center'>
        <div
          class='w-full bg-fixed flex flex-col justify-center object-center py-24'
          style='height: 100vh;'
        >
          <div :class='titleStyle'>Bakes by Tash</div>
          <div :class='subtitleStyle'>
            Making you smile one cupcake at a time.
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <div id='home' class='mx-auto pb-4'>
        <div
          class='w-full bg-fixed flex flex-col justify-center object-center py-24'
          :style='backgroundImage.intro'
        >
          <div :class='titleStyle'>Bakes by Tash</div>
          <div :class='subtitleStyle'>
            Making you smile one cupcake at a time.
          </div>
          <!--          <div @click='' class='absolute bottom-0 text-white text-center font-semibold animate-pulse py-10'-->
          <!--               style='left:50%; transform: translateX(-50%); margin-left: auto; margin-right: auto'>-->
          <!--            <a href="#" v-scroll-to="'#about'">Scroll Down</a>-->

          <!--          </div>-->

          <div @click='' class='absolute bottom-0 text-white text-center font-semibold animate-pulse py-10'
               style='left:50%; transform: translateX(-50%); margin-left: auto; margin-right: auto'>
            <a href='#' v-scroll-to="'#about'">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </a>

          </div>

        </div>
      </div>
      <About id='about'></About>
      <Products class='mb-10'></Products>
      <Testimonials></Testimonials>
      <Contact id='contact'></Contact>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, NextTick, Vue } from 'nuxt-property-decorator'
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
  loading = true
  imageUrl = ''
  titleStyle = 'heading animate-bounce text-center'
  subtitleStyle = '-mt-8 text-lg md:text-xl font-semibold text-center'

  @NextTick('retrieveImageUrl')
  async mounted() {
    await this.retrieveImageUrl()
  }

  async retrieveImageUrl() {
    if (process.client) {
      this.$nuxt.$loading.start()
      const firebaseService = new FirebaseService(this.$fire)
      this.imageUrl = await firebaseService.retrieveImage(
        'gallery',
        'IMG-5392_7.webp'
      )
      this.$nuxt.$loading.finish()
      this.loading = false
    }
  }

  get backgroundImage() {
    if (process.client) {
      const image = {
        intro: `backgroundImage: url(${this.imageUrl});height: 100vh; background-repeat: no-repeat; width:100%; object-fit: cover; -webkit-transform: translateZ(0); `
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
