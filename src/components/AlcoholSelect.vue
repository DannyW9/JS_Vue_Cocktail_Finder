<template lang="html">
  <div class="select-div">
    <select v-model="chosenSpirit" @change="handleChange" id="select">
      <option value="null" selected disabled>Select a base spirit to begin:</option>
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

#select {
  margin-top: 20px;
  font-size: 20px;
  background-color: #FF6A00;
  width: 20%;
  box-shadow: 1px 1px 10px #FF6A00;
}

#select:hover {
  border-color: black;
}

#select:focus {
  border-color: #FF6A00;
}

</style>
