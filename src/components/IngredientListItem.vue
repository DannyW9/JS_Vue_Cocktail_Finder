<template lang="html">
  <div>
    <p>{{drink[ingredient]}}</p>
  </div>
</template>

<script>
export default {
  props: ['ingredient', 'drink']
}
</script>

<style lang="css" scoped>
</style>
