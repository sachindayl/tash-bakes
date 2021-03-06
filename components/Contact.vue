<template>
  <div
    class="p-4 w-full bg-fixed flex object-center justify-center flex-col"
    :style="backgroundImage.image"
  >
    <section
      class="w-full max-w-2xl px-6 py-4 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 p-16 m-4"
    >
      <h2
        class="subs-title animate-wiggle text-3xl font-semibold text-center text-gray-800 dark:text-white"
      >
        Get in touch
      </h2>
      <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
        Have questions? Drop a message and I will get back to you as soon as
        possible.
      </p>

      <div class="grid grid-cols-1 gap-6 mt-6 grid-cols-2">
        <a
          href="https://www.facebook.com/TashBakess"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200"
          aria-label="Facebook"
        >
          <svg class="h-4 w-4 fill-current" viewBox="0 0 512 512">
            <path
              d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
            />
          </svg>
          <span class="mt-2">@TashBakess</span>
        </a>

        <a
          href="https://instagram.com/tashbakess"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-4 h-4 bi bi-instagram"
            viewBox="0 0 20 20"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            />
          </svg>
          <span class="mt-2">@tashbakess</span>
        </a>
      </div>

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
import { FirebaseService } from '~/services/FirebaseService'

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
  imageUrl = ''

  async mounted() {
    await this.retrieveImageUrl()
  }

  async retrieveImageUrl() {
    if (process.client) {
      const width = window.innerWidth
      const firebaseService = new FirebaseService(this.$fire)
      this.imageUrl = await firebaseService.retrieveImage(
        'gallery',
        width < 600 ? 'IMG-5196_8.webp' : 'IMG-5196_7.webp'
      )
    }
  }

  get backgroundImage() {
    if (process.client) {
      const width = window.innerWidth
      let image = {}
      if (width < 600) {
        image = {
          image: `backgroundImage: url(${this.imageUrl});height: 1200px; background-repeat: no-repeat; width:100%; -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover; -webkit-transform: translateZ(0);
`,
        }
      } else {
        image = {
          image: `backgroundImage: url(${this.imageUrl});height: 900px; background-repeat: no-repeat; width:100%;
          -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover; -webkit-transform: translateZ(0);
`,
        }
      }
      return image
    }
    return {}
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
