<template>
  <v-card class="ma-2 pa-1">
    <div class="subheading">
      {{ wineAttr.japanese_title }}
    </div>
    <div class="caption mb-2">
      {{ wineAttr.id }}/{{total}}
    </div>
    <v-slider
      class="px-5 pt-12 pb-3"
      thumb-label="always"
      height="3"
      :max=wineAttr.max_value
      :min=wineAttr.min_value
      :step=wineAttr.step
      v-on:change="set"
    ></v-slider>
  </v-card>
</template>

<script lang="ts">
  // Class API
  import { Vue, Prop, Component } from 'nuxt-property-decorator'
  import { appStore } from "@/store"
  import { WineAttribute } from "@/models"

  @Component
  export default class FormCard extends Vue  {
    // 変数という書き方でデータを受ける側の変数定義
    @Prop({type: Object}) wineAttr!: WineAttribute;
    @Prop({type: Number}) total!: Number;

    // スライダーを動かすたびにsetでワインの属性値に値を設定する
    set(val: number) {
      appStore.SET_WINE_VALUE({ id: this.wineAttr.id, value: val});
    }
  }
</script>