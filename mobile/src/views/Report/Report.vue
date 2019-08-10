<template>
  <div class="report">
    <div class="new_article">
      <button class="btn btn-primary">新增报告</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Report extends Vue {}
</script>

<style lang="scss" scoped>
  .new_article {
    margin: .32rem 0;
  }
</style>
