<template>
  <section>
    <div class="mx-auto my-4">
      <div
        class="w-full bg-fixed bg-auto content-center flex flex-col justify-center items-center"
        :style="backgroundImage"
      >
        <h2
          class="animate-wiggle p-4 pb-12 text-3xl font-semibold text-center text-white dark:text-black"
        >
          Our Products
        </h2>
        <div
          class="flex flex-col md:flex-row items-center justify-center max-w-sm mx-auto gap-12"
        >
          <div v-for="product in products">
            <Product :products-data.sync="product"></Product>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ProductI } from '../pages/index.vue'

@Component
export default class Products extends Vue {
  get backgroundImage() {
    if (process.client) {
      return `backgroundImage: url(https://images.unsplash.com/photo-1603532553059-3facb851d937?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80); height: 700px; opacity: 0.75;`
    }
    return ''
  }

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
}
</script>

<style scoped></style>
