<template lang="html">

  <div class="ingredients-l">
    <h3>Ingredients:</h3>
    <!-- <p>{{fullDetails}}</p> -->
    <ingredient-list-item v-for="(number, index) in num" :key="index" :number="number" :drink="fullDetails"/>

  </div>

</template>

<script>
import IngredientListItem from '@/components/IngredientListItem.vue';
export default {
  props: ['fullDetails', 'num'],
  components: {
    "ingredient-list-item": IngredientListItem
  }
}
</script>

<style lang="css" scoped>

</style>
