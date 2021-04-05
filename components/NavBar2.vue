<template>
  <nav class="z-40 fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow">
    <div class="mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div>
          <nuxt-link to="/">
            <div
              class="navbar-heading text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
            >
              Bakes by Tash
            </div>
          </nuxt-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
            @click="updateMenuVisibility"
          >
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->

      <div class="md:flex items-center" v-if="menuItemsVisible">
        <div class="flex flex-col md:flex-row md:mx-6">
          <nuxt-link to="/">
            <div
              class="my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
            >
              Home
            </div>
          </nuxt-link>
          <nuxt-link to="/#about">
            <div
              class="my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
            >
              About
            </div>
          </nuxt-link>
          <nuxt-link to='/#contact'>
            <div class='my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0'>Contact</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  menuItemsVisible = false

  mounted() {
    if (process.client) {
      this.navBarVisibility()
    }
  }

  private navBarVisibility() {
    const width = window.innerWidth
    this.menuItemsVisible = width >= 640
  }

  private updateMenuVisibility() {
    this.menuItemsVisible = !this.menuItemsVisible
  }
}
</script>

<style scoped></style>
