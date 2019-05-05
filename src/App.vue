<template lang="html">
  <div id="app">
    <header>
        <nav>
          <router-link :to="{name: 'cocktails'}" class="nav">View Cocktails</router-link>
          <router-link @click="this.cocktail=[]" :to="{name: 'details', params: {cocktail}}" class="nav">Random Cocktail</router-link>
        </nav>
    </header>
    <router-view id="view"/>
  </div>

</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      cocktail: []
    }
  },
  methods: {
    reset(){
      this.cocktail = []
    }
  },
  mounted(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then((data) => {
      this.cocktail = data.drinks[0]
    });
  }
}
</script>

<style lang="css" scoped>

.nav {
  display: block;
  padding: 10px;
  border-left: 2px solid #FF6A00;
  font-size: 18px;
  text-decoration: none;
  color: #FF6A00;
}

.nav:hover {
  background-color: #FF6A00;
  color: black;
  text-transform: uppercase;
}

nav {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 0;
  background-color: black;
}

</style>
