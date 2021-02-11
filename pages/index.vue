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
    <About></About>

    <section>
      <div class="mx-auto my-4">
        <div
          class="w-full bg-fixed bg-auto flex content-center justify-center flex-wrap"
          :style="backgroundImage.products"
        >
          <div
            class="flex flex-col md:flex-row items-center justify-center max-w-sm mx-auto gap-8"
          >
            <div v-for="product in products">
              <Products :products-data.sync="product"></Products>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="m-6 mb-24 md:mb-12 p-4 py-24">
      <div class="flex flex-col md:flex-row justify-center">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.customerName + index"
          class="py-12 px-4"
        >
          <Testimonial
            class="flex-initial"
            :testimonial-data.sync="testimonial"
          ></Testimonial>
        </div>
      </div>
    </section>
    <div
      class="p-4 w-full bg-fixed bg-auto flex content-center justify-center flex-wrap"
      :style="backgroundImage.contact"
    >
      <Contact></Contact>
    </div>
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
  get products(): ProductI[] {
    return [
      {
        name: 'Cupcakes',
        url:
          'https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
        price: '$25',
      },
      {
        name: 'Cakes',
        url:
          'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
        price: '$60',
      },
    ]
  }

  get backgroundImage() {
    if (process.client) {
      const width = window.innerWidth
      return {
        intro: `backgroundImage: url(https://images.unsplash.com/photo-1602630724200-54205d5bffa8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80);height: 700px;`,
        products: `backgroundImage: url(https://images.unsplash.com/photo-1603532553059-3facb851d937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80); height: 700px; opacity: 0.75;`,
        contact:
          width < 600
            ? `backgroundImage: url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80); height: 1200px; opacity: 0.75;`
            : `backgroundImage: url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80); height: 700px; opacity: 0.75;`,
      }
    }
    return {}
  }

  get testimonials(): TestimonialI[] {
    return [
      {
        customerName: 'Sophia Sareen',
        subject: '',
        message:
          '"The best cupcakes I\'ve had. They went above and beyond my expectations! Beautiful colours and arrived on time."',
        image:
          'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
      },
      {
        customerName: 'Kavina Sivasothy',
        subject: '',
        message:
          '"Absolutely loved these cupcakes!! Beautifully decorated and tasted delicious. Can’t wait to order more from her!"',
        image:
          'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
      }
    ]
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
