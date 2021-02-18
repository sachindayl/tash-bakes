<template>
  <div
    class="p-4 w-full bg-fixed bg-auto flex content-center justify-center flex-wrap"
    :style="backgroundImage"
  >
    <section
      class="w-full max-w-2xl px-6 py-4 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 p-16 m-4"
    >
      <h2
        class='subs-title animate-wiggle text-3xl font-semibold text-center text-gray-800 dark:text-white'
      >
        Get in touch
      </h2>
      <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
        Have questions? Drop a message and I will get back to you as soon as
        possible.
      </p>

      <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
        <a
          href="#"
          class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mt-2">Huron Village, Kitchener, ON</span>
        </a>

        <a
          href="#"
          class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>

          <span class="mt-2">+1 (226) 887-6799</span>
        </a>

        <a
          href="#"
          class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>

          <span class="mt-2">hskurera@gmail.com</span>
        </a>
      </div>

      <div class="mt-6">
        <div class="items-center -mx-2 flex flex-col md:flex-row">
          <div class="w-full mx-2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >Name</label
            >

            <input
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              v-model="newMessage.name"
            />
          </div>

          <div class="w-full mx-2 mt-4 md:mt-0">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >Phone Number</label
            >

            <input
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="number"
              v-model="newMessage.phoneNumber"
            />
          </div>

          <div class="w-full mx-2 mt-4 md:mt-0">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >E-mail</label
            >

            <input
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              v-model="newMessage.email"
            />
          </div>
        </div>

        <div class="w-full mt-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >Message</label
          ><textarea
            class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            v-model="newMessage.message"
          ></textarea>
        </div>

        <div class="flex justify-center mt-6">
          <button
            class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            @click="validateAndSendMessage"
          >
            Send Message
          </button>
        </div>
      </div>
      <SuccessAlert
        class="m-4"
        :success-alert-data.sync="dialog"
      ></SuccessAlert>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { EmailService } from '~/services/EmailService'

export interface MessageI {
  name: string
  phoneNumber: string
  email: string
  message: string
}

@Component
export default class Contact extends Vue {
  newMessage: MessageI = {
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  }
  dialog = false

  get backgroundImage() {
    if (process.client) {
      const width = window.innerWidth
      return width < 600
        ? `backgroundImage: url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80); height: 1200px; opacity: 0.75;`
        : `backgroundImage: url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80); height: 700px; opacity: 0.75;`
    }
    return ''
  }

  async validateAndSendMessage() {
    const response = await new EmailService().sendEmail(this.newMessage)
    if (response.status == 200) {
      this.dialog = true
    }
  }
}
</script>

<style scoped></style>
