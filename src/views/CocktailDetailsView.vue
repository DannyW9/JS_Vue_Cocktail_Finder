<template lang="html">

  <div v-if="cocktail">

    <h1>{{cocktail.strDrink}}</h1>

    <div class="thumb">
      <img :src="fullDetails.strDrinkThumb">
    </div>

    <div class="text">
      <ingredient-list :fullDetails="fullDetails" :num="numbers"/>
      <div class="vertical"></div>
      <p>{{fullDetails.strInstructions}}</p>
    </div>

  </div>


</template>

<script>
import IngredientList from '@/components/IngredientList.vue';
export default {
  data(){
    return {
    chosenCocktail: this.cocktail,
    fullDetails: [],
    numbers: []
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

    // for(let x=1; x<16; x++) {
    //   // if(this.fullDetails[`strIngredient${x}`]){
    //   let ing = "strIngredient" + x;
    //   console.log(this.fullDetails[ing]);
    //     this.ing2.push(ing)
    //   // }
    // }

  for(let i=1; i<15; i++){
    this.numbers.push(i);
  };
  },
  components: {
    "ingredient-list": IngredientList
  }
}
</script>

<style lang="css" scoped>

h1 {
  text-align: center;
  margin-bottom: 60px;
}

.thumb {
  width: 100%;
  text-align: center;
}

.text {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  font-size: 18px;
}

.vertical {
  border-left: 4px solid black;
  height: 400px;
  padding: 10px;
}

p {
 width: 50%;
}

img {
  height: 400px;
  width: 400px;
  border-radius: 15px 50px;
}
</style>
