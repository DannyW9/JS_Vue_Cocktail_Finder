<template lang="html">
  <div class="wrapper">
    <h2>{{heading}}-based cocktails list</h2>
    <div class="scroller">
      <cocktail-list-item v-for="(cocktail, index) in cocktails" :cocktail="cocktail" :key="index"></cocktail-list-item>
    </div>
  </div>
</template>

<script>
import CocktailListItem from '@/components/CocktailListItem.vue';
export default {
  props: ['cocktails', 'heading'],
  components: {
    "cocktail-list-item": CocktailListItem
  }
}
</script>

<style lang="css" scoped>

h2 {
  color: white;
  padding-top: 20px;
}

.wrapper {
  margin: auto;
  text-align: center;
  position: relative;
  width: 80%;
  height: 100%;
  margin-bottom: 20px !important;
  background: #070707;
  box-shadow: 1px 1px 10px #FF6A00;
  padding-left: 30px;
}

.scroller{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 500px;
  scrollbar-color: red yellow;
  /* white-space: nowrap; */
}


</style>
