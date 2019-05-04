<template lang="html">

  <div v-if="cocktail">
    <h2>{{cocktail.strDrink}}</h2>
    <p>Instructions: {{fullDetails.strInstructions}}</p>

  </div>


</template>

<script>
export default {
  data(){
    return {
    chosenCocktail: this.cocktail,
    fullDetails: []
    }
  },
  props: ['cocktail'],
  mounted(){
    if(!this.cocktail) this.$router.push('/cocktails');

    if(this.chosenCocktail) fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.chosenCocktail.idDrink}`)
    .then(response => response.json())
    .then((details) => {
      this.fullDetails = details.drinks[0];
    })
  }
}
</script>

<style lang="css" scoped>
</style>
