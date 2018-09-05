<template>
  <section class="hero">
    <h2 class="hero-h2">Tajemniczy blog o niczym</h2>
  </section>
</template>

<script>
    export default {
    data () {
      return {
      }
    },
    mounted: function() {
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .hero {
    background-color: $c-white;
    background-image: url("../../assets/img.svg");
    width: 100%;
    text-align: center;
    // border-bottom-left-radius: 15%;
    // border-bottom-right-radius: 15%;
  }
  .hero-h2 {
    font: $f-h1;  
    color: $c-black;
  }

  @media screen and (max-width: 500px) {
    .hero-h2 {
      font: $f-h1-mob;
    }
  }

</style>
