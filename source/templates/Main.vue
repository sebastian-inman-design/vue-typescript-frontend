<template>

  <main class="w-full h-full">
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main>

</template>

<script lang="ts">
  
  import { Component, Prop, Vue } from "vue-property-decorator"

  const components: any = {
    Header: () => import("@/components/layout/Header.vue")
  }

  @Component({ components }) export default class MainTemplate extends Vue {}

</script>