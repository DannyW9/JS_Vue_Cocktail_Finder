<template lang="html">

  <div v-if="cocktail">
    <h2>{{cocktail.strDrink}}</h2>
    <p>Instructions: {{fullDetails.strInstructions}}</p>
    <ingredient-list :fullDetails="fullDetails" :ing="ingredients"/>

  </div>


</template>

<script>
import IngredientList from '@/components/IngredientList.vue';
export default {
  data(){
    return {
    chosenCocktail: this.cocktail,
    fullDetails: [],
    ingredients: [],
    i: ""
    }
  },
  props: ['cocktail'],
  mounted(){
    if(!this.cocktail) this.$router.push('/cocktails');

    if(this.chosenCocktail) fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.chosenCocktail.idDrink}`)
    .then(response => response.json())
    .then((details) => {
      this.fullDetails = details.drinks[0];
    });

    for(this.i=1; this.i<16; this.i++) {
      // if(this.fullDetails[`strIngredient${this.i}`]){
      let ing = "strIngredient" + this.i;
      // console.log(this.fullDetails[ing]);
        this.ingredients.push(ing)
      // }
    }
  },
  components: {
    "ingredient-list": IngredientList
  }
}
</script>

<style lang="css" scoped>
</style>
