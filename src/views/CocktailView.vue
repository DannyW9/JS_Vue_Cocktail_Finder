<template lang="html">
  <div>
    <h1>hello world</h1>
    <alcohol-select :alcohol="alcohol"/>
  </div>
</template>

<script>
import AlcoholSelect from '@/components/AlcoholSelect.vue';
export default {
  data(){
    return {
      alcohol: ["Vodka", "Gin", "Rum", "Tequila", "Bourbon"]
    }
  },
  components: {
    "alcohol-select": AlcoholSelect
  }
}
</script>

<style lang="css" scoped>
</style>
