<template lang="html">
  <div class="select-div">
    <select v-model="chosenSpirit" @change="handleChange">
      <option value="null" selected disabled>Select a spirit:</option>
      <option v-for="(spirit, index) in spirits" :value="spirit" :key="index">{{spirit}}</option>
    </select>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  data(){
    return {
      chosenSpirit: null
    }
  },
  name: 'alcohol-select',
  props: ['spirits'],
  methods: {
    handleChange(){
      eventBus.$emit('spirit-selected', this.chosenSpirit)
    }
  }
}
</script>

<style lang="css" scoped>

.select-div {
  text-align: center;
}

</style>
