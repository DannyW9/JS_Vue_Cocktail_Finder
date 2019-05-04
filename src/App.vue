<template lang="html">
  <div id="app">
    <header>
      <router-link :to="{name: 'cocktails'}">View Cocktails</router-link>
    </header>
    <router-view id="view"/>
  </div>

</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="css" scoped>

</style>
