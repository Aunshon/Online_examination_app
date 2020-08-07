<template>
  <header>
    <div class="slider">
        <ul class="slides">
          <li>
            <img src="../asset/c1.jpg"> <!-- random image -->
            <div class="caption center-align">
              <h3 class="vue_color-text">This is our big Tagline! one</h3>
              <h5 class="light vue_color-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="../asset/c3.jpg"> <!-- random image -->
            <div class="caption left-align">
              <h3 class="vue_color-text">Left Aligned Caption two</h3>
              <h5 class="light vue_color-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="../asset/c4.jpg"> <!-- random image -->
            <div class="caption center-align">
              <h3 class="vue_color-text">Left Aligned Caption three</h3>
              <h5 class="light vue_color-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="../asset/c5.jpg"> <!-- random image -->
            <div class="caption right-align">
              <h3 class="vue_color-text">Left Aligned Caption four</h3>
              <h5 class="light vue_color-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="../asset/c6.jpg"> <!-- random image -->
            <div class="caption left-align">
              <h3 class="vue_color-text">Left Aligned Caption five</h3>
              <h5 class="light vue_color-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="../asset/c7.jpg"> <!-- random image -->
            <div class="caption right-align">
              <h3 class="vue_color-text">Left Aligned Caption six</h3>
              <h5 class="light vue_color-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>


        </ul>
    </div>
  </header>
</template>

<script>

export default {
  name: 'LandingComponent',
  data(){
    return{
        
    }
  },
  components: {
      
  },
  mounted(){
      let elems = document.querySelector('.slider');
      let instances = M.Slider.init(elems,{
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });
  },
  methods:{
      
    //end of methods
  },
}
</script>

<style lang="scss" scoped>
  img{
    filter: brightness(40%);
  }
</style>