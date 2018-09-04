<template>
  <section class="filter-wrapper">
    <fieldset class="filter-fieldset">
      <legend class="filter-legend">
        Filtruj kategorie:
      </legend>
      <div class="filter-radio-wrapper">
        <label class="filter-radio-label" 
          v-for="el in categories" 
          :key="el.lenght">
          <input  tabindex="1" class="filter-radio" 
            :ref='el' 
            :class="el" 
            type="radio" 
            :id="el" 
            :value="el" 
            v-model="picked">
            <span>
              {{ el }}
            </span>
        </label>
      </div>
    </fieldset>
  </section>
</template>

<script>
    export default {
    data () {
      return {
        pickedEl: '',
      }
    },
    mounted: function() {
      const currentCategory = this.$route.query.category;
      this.pickedEl = currentCategory;
    },
    computed: {
      picked: {
        get: function() {
          return this.pickedEl;
        },
        set: function(val) {
          window.location.href = `/#/wszystko?category=${val}`;
          this.$root.$emit('filterChange', val);
          this.pickedEl = val;
        }
      },
    },
    props: ['categories']
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .filter-wrapper {
    margin: 50px 0;
  }

  .filter-fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .filter-legend {
    font: $f-h2;
    margin: 0 0 10px 0;
    padding: 0;
  }

  .filter-radio {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    // display: none;
  }
  
  .filter-radio-label {
    margin: 0;
    padding: 0;
    display: inline;
  }
  .filter-radio-wrapper {
    display: flex;
    flex-direction: row;
  }
  .filter-radio-label span {
    font: $f-h2;
    text-align: center;
    background-color: $c-red;
    padding: 10px;
    margin: 5px;
    color: $c-black;
    border-radius: $b-radius;
  }

  .filter-radio:checked + span {
    background-color: $c-green;
  }
</style>
