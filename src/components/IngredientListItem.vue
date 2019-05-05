<template lang="html">
  <div>
    <li v-if="drink[`strIngredient${number}`]">{{drink[`strMeasure${number}`]}}{{drink[`strIngredient${number}`]}}</li>
  </div>
</template>

<script>
export default {
  props: ['number', 'drink']
}
</script>

<style lang="css" scoped>

li {
  padding: 5px;
}
</style>
