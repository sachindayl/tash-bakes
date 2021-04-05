<template>
  <div >
    <div class='w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50' v-if='loading' >
      <Spinner></Spinner>
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Gallery extends Vue {
  loading = true
}
</script>

<style lang='scss' scoped>

</style>
