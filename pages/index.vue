<template>
  <div class="main-container">
    <div class="mx-auto pb-4">
      <div
        class="w-full bg-fixed bg-auto flex content-center justify-center flex-wrap"
        :style="backgroundImage.intro"
      >
        <div class="animate-bounce text-5xl text-center text-white">
          Tash Bakes
        </div>
      </div>
    </div>
    <About id='about'></About>
    <Products></Products>
    <Testimonials></Testimonials>
    <Contact id='contact'></Contact>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

export interface ProductI {
  name: string
  url: string
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
  get backgroundImage() {
    if (process.client) {
      const width = window.innerWidth
      return {
        intro: `backgroundImage: url(https://images.unsplash.com/photo-1602630724200-54205d5bffa8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80);height: 700px;`,
      }
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
