<template lang="html">
  <div class="wrapper">
    <div class="scroller">
    <cocktail-list-item v-for="cocktail in cocktails" :cocktail="cocktail"></cocktail-list-item>
        </div>
  </div>
</template>

<script>
import CocktailListItem from '@/components/CocktailListItem.vue';
export default {
  props: ['cocktails'],
  components: {
    "cocktail-list-item": CocktailListItem
  }
}
</script>

<style lang="css" scoped>

.wrapper {
  margin: auto;
  text-align: center;
  position: relative;
  width: 80%;
  height: 100%;
  margin-bottom: 20px !important;
  background: #EFEFEF;
  box-shadow: 1px 1px 10px #999;
  padding-left: 30px;
}

.scroller{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 500px;
  /* white-space: nowrap; */
}

</style>
