<template>
  <keep-alive>
    <h1>This is the home page</h1>
  </keep-alive>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from "vue-property-decorator"

  const components: any = {}

  @Component({ components }) export default class HomePage extends Vue{}

</script>