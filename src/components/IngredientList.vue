<template lang="html">

  <div class="ingredients-l">
    <h3>Ingredients:</h3>
    <!-- <p>{{fullDetails}}</p> -->
    <ingredient-list-item v-for="(ingredient, index) in ing" :key="index" :ingredient="ingredient" :drink="fullDetails"/>

  </div>

</template>

<script>
import IngredientListItem from '@/components/IngredientListItem.vue';
export default {
  props: ['fullDetails', 'ing'],
  components: {
    "ingredient-list-item": IngredientListItem
  }
}
</script>

<style lang="css" scoped>
</style>
