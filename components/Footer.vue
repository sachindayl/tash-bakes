<template>
  <footer
    class="flex flex-col justify-between items-center px-6 py-2 bg-white dark:bg-gray-800 sm:flex-row border-t-2"
  >
    <a
      href="#"
      class="footer-heading"
      >Bakes by Tash</a
    >

    <p class="py-2 text-gray-800 justify-center text-center dark:text-white md:py-0">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span> Crafted by </span>
      <a class='text-blue-600' href="https://technomatesoftware.com" target="_blank"
        >Technomate Software</a
      >
    </p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style scoped></style>
