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
  border-left: 1px solid black;
  font-size: 18px;
  margin-right: 10px;
  text-decoration: none;
  color: black;
}

.nav:hover {
  background-color: black;
  color: white;
  text-transform: uppercase;
}

nav {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 0;
  background-color: #D7D9D8;
}


nav ul li a:hover {
  background-color: #5D366D;
  color: #D7D9D8;
  text-transform: uppercase;
}

</style>
