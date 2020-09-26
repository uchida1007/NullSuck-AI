<template>
  <v-layout column>
    <result-chart/>
    <result-list/>
    <v-btn @click="back">もう一度診断する</v-btn>
  </v-layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import { appStore } from "@/store";

  @Component({
    components: {
      ResultChart: () => import('~/components/Result/ResultChart.vue'),
      ResultList: () => import('~/components/Result/ResultList.vue')
    }
  })

  export default class Result extends Vue {
    // ページのタイトルに「診断結果」と入れる
    created() {
      appStore.SET_TITLE('診断結果');
    }
    // stateをクリアして、診断画面に戻る
    private back(){
      appStore.CLEAR();
      this.$router.back();
    }
  }
</script>