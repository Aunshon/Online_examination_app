<template>
  <div>
      <Nav></Nav>
      <!-- <div class="container"> -->

      <router-view></router-view>
      <!-- </div> -->
  </div>
</template>

<script>

import M from 'materialize-css';
import "materialize-css/dist/js/materialize.min.js";


import Nav from './Nav'

export default {
  name: 'App',
  data(){
    return{
        
    }
  },
  components: {
      Nav,
  },
  mounted(){
    M.AutoInit()
  },
  methods:{
      
    //end of methods
  },
}
</script>

<style>

</style>
