<template>
  <header>
    <h1>This is the header</h1>
  </header>
</template>

<script lang="ts">
  
  import { Component, Prop, Vue } from "vue-property-decorator"

  const components: any = {}

  @Component({ components }) export default class Header extends Vue {}

</script>