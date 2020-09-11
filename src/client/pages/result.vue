<template>
  <v-layout column>
    <result-chart/>
    <result-list/>
    <v-btn @click="back">もう一度診断する</v-btn>
  </v-layout>
</template>

<script>
import ResultChart from '~/components/Result/ResultChart.vue'
import ResultList from '~/components/Result/ResultList.vue'

export default {
  components: {
    ResultChart,
    ResultList
  }
}
</script>