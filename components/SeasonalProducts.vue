<template>
  <section  :style='containerStyle' class='py-24 px-8'>
    <h2
      class='p-4 pb-12 subs-title animate-wiggle text-3xl font-semibold text-center text-gray-800 dark:text-white'
    >
      Seasonal Products
    </h2>
    <div v-if='seasonalList && seasonalList.length > 1'>
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
import { Component, PropSync, Vue } from 'nuxt-property-decorator'
import { SeasonalDataModel } from '~/data/models/SeasonalDataModel'

@Component
export default class SeasonalProducts extends Vue {
  @PropSync('seasonalData', {
    type: Array as () => SeasonalDataModel[]
  })
  seasonalList!: SeasonalDataModel[];

  get containerStyle() {
    if (process.client) {
      const width = window.innerWidth
      return width < 600
        ? {
          'min-height': '800px',
          background: this.backgroundColor
        }
        : {
          'min-height': '725px',
          background: this.backgroundColor
        }
    }
    return ''
  }

  get backgroundColor() {
    return this.seasonalList && this.seasonalList.length > 0
      ? `linear-gradient(${this.seasonalList[0].colour}, ${this.seasonalList[0].colour2})`
      : '#FFFF22'
  }
}
</script>

<style lang='scss' scoped></style>
