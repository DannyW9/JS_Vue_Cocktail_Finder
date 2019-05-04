<template lang="html">
  <div class="individual">
    <router-link :to="{ name: 'details', params: {cocktail} }">
      <h3>{{cocktail.strDrink}}</h3>
      <img :src="cocktail.strDrinkThumb" alt="Image of cocktail">
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['cocktail']
}
</script>

<style lang="css" scoped>

a {
  text-decoration: none;
  color: black;
}

img {
  height: 200px;
  width: 200px;
}

h3 {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
}

.individual {
  display: flex;
  flex-direction: column;
  /* vertical-align: top; */
  padding: 0px;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-right: 20px;
  max-width: 200px;
  height: 300px;
}
</style>
