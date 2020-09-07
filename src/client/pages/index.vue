<template>
  <v-layout column>
    <div class="text-center">
      <div class="mt-3 title font-weight-bold">
        ワインについて教えてください
      </div>
      <div class="mt-3 mb-3 caption grey--text">
        スライダーを選択してデータを入力してください。<br>
        データをもとにAIが診断します。
      </div>
    </div>
    <form-card v-for="i in 11":key="`${i}`"/>
    <v-btn @click="submit">診断結果を表示する</v-btn>
  </v-layout>
</template>

<script>
import FormCard from '~/components/Form/FormCard.vue'

export default {
  components: {
    FormCard
  }
}
</script>