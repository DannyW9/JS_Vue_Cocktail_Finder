<template lang="html">
  <div>
    <h1>Cocktail Finder</h1>
    <br>
    <h3>Select a base spirit to get started:</h3>
    <alcohol-select :spirits="alcohol"/>
    <br>
    <cocktail-list :cocktails="cocktails" v-if="selectedSpirit" :heading="selectedSpirit"/>
  </div>
</template>

<script>
import AlcoholSelect from '@/components/AlcoholSelect.vue';
import CocktailList from '@/components/CocktailList.vue'
import {eventBus} from '../main.js';
export default {
  data(){
    return {
      alcohol: ["Vodka", "Gin", "Rum", "Tequila", "Bourbon"],
      selectedSpirit: null,
      cocktails: []
    }
  },
  mounted(){
    eventBus.$on('spirit-selected', (spirit) => {
      this.selectedSpirit = spirit;

      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.selectedSpirit}`)
      .then(response => response.json())
      .then((data) => {
        this.cocktails = data.drinks;
      });
    })
  },
  components: {
    "alcohol-select": AlcoholSelect,
    "cocktail-list": CocktailList
  }
}
</script>

<style lang="css" scoped>


h1, h3 {
  text-align: center;
}

</style>
