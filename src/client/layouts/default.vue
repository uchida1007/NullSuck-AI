<template>
  <v-app>
    <!-- ▼▼▼ ヘッダー ▼▼▼ -->
    <v-app-bar
      fixed
      app
      color="primary"
      class="white--text"
    >
      <v-app-bar-nav-icon class="white--text"/>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <!-- ▲▲▲ ヘッダー ▲▲▲ -->

    <!-- ▼▼▼ コンテンツ ▼▼▼ -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- ▲▲▲ コンテンツ ▲▲▲ -->

    <!-- ▼▼▼ フッター ▼▼▼ -->
    <v-footer app>
      <span>&copy; 2020 NorwegianGeek</span>
    </v-footer>
    <!-- ▲▲▲ フッター ▲▲▲ -->
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component} from 'nuxt-property-decorator'
  import { appStore } from '@/store';
  
  // appStoreのStateにあるtitleをツールバーのtitleとして表示
  @Component
  export default class extends Vue {
    get title() {
      return appStore.title;
    }
  }
</script>