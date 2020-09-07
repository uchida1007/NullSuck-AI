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
      <v-toolbar-title>入力</v-toolbar-title>
    </v-app-bar>
    <!-- ▲▲▲ ヘッダー ▲▲▲ -->

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- ▼▼▼ フッター ▼▼▼ -->
    <v-footer app>
      <span>&copy; 2020 NorwegianGeek</span>
    </v-footer>
    <!-- ▲▲▲ フッター ▲▲▲ -->

  </v-app>
</template>