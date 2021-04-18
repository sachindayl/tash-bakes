<template>
  <div>
    <NavBar></NavBar>
    <div class="main-container">
      <div id="home" class="mx-auto">
        <div
          class="w-full bg-fixed flex flex-col justify-center object-center py-24"
          :style="backgroundImage"
        >
          <div :class="titleStyle">Bakes by Tash</div>
          <div :class="subtitleStyle">
            Making you smile one cupcake at a time.
          </div>
          <div
            @click=""
            class="absolute bottom-0 text-white text-center font-semibold animate-pulse py-10"
            style="
              left: 50%;
              transform: translateX(-50%);
              margin-left: auto;
              margin-right: auto;
            "
          >
            <a href="#" v-scroll-to="'#about'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-arrow-down-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
            </a>
          </div>
        </div>
        <About id="about"></About>
        <ProductsSection id="products" class="mb-10"></ProductsSection>
        <Testimonials></Testimonials>
        <Contact id="contact"></Contact>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

export interface ProductI {
  name: string
  image: string
  price: string
}

export interface TestimonialI {
  name: string
  message: string
  image: string
}

@Component
export default class Index extends Vue {
  titleStyle = 'heading animate-bounce text-center'
  subtitleStyle = '-mt-8 text-lg md:text-xl font-semibold text-center'

  get backgroundImage() {
    if (process.client) {
      const image = {
        background: 'url(' + require('@/assets/sunset-wallpaper.webp') + ')',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        '-webkit-transform': 'translateZ(0)',
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

<style lang='scss'>
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
  font-family: 'MilkyNice', cursive;
  font-size: 84px;
}

@media only screen and (max-width: 600px) {
  .heading {
    font-size: 64px;
  }
}

.navbar-heading {
  font-family: 'MilkyNice', cursive;
  font-size: 28px;
}

@media only screen and (max-width: 600px) {
  .navbar-heading {
    font-size: 24px;
  }
}

.footer-heading {
  font-family: 'MilkyNice', cursive;
  font-size: 24px;
}

@media only screen and (max-width: 600px) {
  .footer-heading {
    font-size: 20px;
  }
}

.subs-title {
  font-family: 'MilkyNice', cursive;
  font-size: 40px;
}

@media only screen and (max-width: 600px) {
  .subs-title {
    font-size: 32px;
  }
}

.subs-title-white {
  font-family: 'MilkyNice', cursive;
  font-size: 48px;
  color: white !important;
}

@media only screen and (max-width: 600px) {
  .subs-title-white {
    font-size: 36px;
  }
}
</style>
