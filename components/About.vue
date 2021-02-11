<template>
  <section class="bg-white dark:bg-gray-800 p-12">
    <div class="container mx-auto px-6 py-8">
      <div class="lg:flex items-center">
        <div class="lg:w-1/2">
          <h2 class="lg:max-w-md animate-wiggle text-center text-gray-800 dark:text-gray-100 text-3xl font-bold">
            About Me
          </h2>

          <p class="text-justify text-gray-500 dark:text-gray-400 lg:max-w-md mt-4">
            Hi I am Hithasha, a radiology student , Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Illum in sed non alias, fugiat,
            commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur
            id, maiores beatae ipsa omnis aliquam?
          </p>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-1/2">
          <div class="flex items-center justify-center lg:justify-end">
            <div class="max-w-lg">
              <img
                class="w-full h-64 object-cover object-center rounded-md shadow"
                src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
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

@Component
export default class About extends Vue {}
</script>

<style scoped></style>
