<template>
  <div
    class='max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'
  >
    <nuxt-link to='/products'>
      <div class='px-4 py-2'>
        <h1
          class='text-2xl p-4 font-bold text-gray-800 uppercase dark:text-white'
        >
          {{ seasonal.name }}
        </h1>
        <p class='mt-1 text-sm text-gray-600 dark:text-gray-400'>
          {{ seasonal.caption }}
        </p>
      </div>

      <img
        class='object-cover w-full h-48 mt-2'
        :src='imageUrl'
        alt='NIKE AIR'
      />

      <div class='flex items-center justify-between px-4 py-2 bg-gray-900'>
        <h1 class='text-lg font-bold text-white mx-auto'>
          Starting From ${{ seasonal.price }}
        </h1>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang='ts'>
import { Component, PropSync, Vue } from 'nuxt-property-decorator'
import { SeasonalDataI } from '~/data/interfaces/SeasonalDataI'
import { FirebaseService } from '~/services/FirebaseService'

@Component
export default class SeasonalProduct extends Vue {
  @PropSync('seasonalData', {
    type: Object as () => SeasonalDataI
  })
  readonly seasonal!: SeasonalDataI
  imageUrl = require('assets/placeholder.png')

  async fetch() {
    if (process.client) {
      await this.retrieveImageUrl()
    }
  }

  async retrieveImageUrl() {
    const firebaseService = new FirebaseService(this.$fire)
    const firebaseImageUrl = await firebaseService.retrieveImage(
      this.seasonal.type,
      this.seasonal.image
    )
    if (firebaseImageUrl !== '' && firebaseImageUrl != undefined) {
      this.imageUrl = firebaseImageUrl
    }
  }
}
</script>

<style lang='scss' scoped></style>
