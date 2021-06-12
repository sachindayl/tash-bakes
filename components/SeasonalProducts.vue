<template>
  <section v-show='seasonalList.length > 0' :style='containerStyle' class='py-24 px-8'>
    <h2
      class='p-4 pb-12 subs-title animate-wiggle text-3xl font-semibold text-center text-gray-800 dark:text-white'
    >
      Seasonal Products
    </h2>
    <div v-if='seasonalList.length > 1'>
      <div
        class='grid grid-cols-2 grid-flow-row gap-2 justify-center align-middle'
        v-for='(item, index) in seasonalList'
        :key='item.name + index'
      >
        <SeasonalProduct :seasonal-data='item'></SeasonalProduct>
      </div>
    </div>
    <div v-else>
      <div v-for='(item, index) in seasonalList' :key='item.name + index'>
        <SeasonalProduct :seasonal-data='item'></SeasonalProduct>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { FirebaseService } from '~/services/FirebaseService'
import { SeasonalDataModel } from '~/data/models/SeasonalDataModel'

@Component
export default class SeasonalProducts extends Vue {
  seasonalList: SeasonalDataModel[] = []

  async fetch() {
    if (process.client) {
      const firebaseService = new FirebaseService(this.$fire)
      this.seasonalList = await firebaseService.retrieveSeasonalProductsInfo()
    }
  }

  get containerStyle() {
    if (process.client) {
      const width = window.innerWidth
      return width < 600
        ? {
          'min-height': '750px',
          background: this.backgroundColor
        }
        : {
          'min-height': '500px',
          background: this.backgroundColor
        }
    }
    return ''
  }

  get backgroundColor() {
    return this.seasonalList.length > 0
      ? `linear-gradient(${this.seasonalList[0].colour}, ${this.seasonalList[0].colour2})`
      : '#FFFFFF'
  }

  get seasonList() {
    return this.seasonalList
  }
}
</script>

<style lang='scss' scoped></style>
