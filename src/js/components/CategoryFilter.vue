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
          <input class="filter-radio"
            :ref='el' 
            :class="el" 
            type="radio" 
            :id="el" 
            :value="el" 
            v-model="picked">
            <span class="filter-radio-content">
              {{ el }}
            </span>
        </label>
        <button 
          v-if="pickedEl !== ''" 
          class="filter-reset CTA" 
          @click="resetFilter">reset
        </button>
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
      console.table(this.pickedEl);
      const currentCategory = this.$route.query.category;
      this.pickedEl = currentCategory || '';
    },
    methods: {
      resetFilter: function () {
        this.pickedEl = '';
        window.location.href = `/#/wszystko`;
        this.$root.$emit('reset', '');
      }
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
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .filter-fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .filter-legend {
    font: $f-h2;
    margin: 0 0 10px 5px;
    padding: 0;
  }

  .filter-radio {
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }
  
  .filter-radio-label {
    padding: 10px 0;
    margin: 5px 0;
    height: 100%;
  }

  .filter-radio-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .filter-reset {
    border: none;
    padding: 5px 10px;
    margin: 5px;
    box-sizing: border-box;
    font: $f-h2;
    background: $c-red;
  }

  .filter-radio-label .filter-radio-content {
    font: $f-h2;
    text-align: center;
    background-color: $c-yellow;
    padding: 5px 10px;
    margin: 0 5px;
    box-sizing: border-box;
    height: 100%;
    color: $c-black;
    border-radius: $b-radius;
  }

  .filter-radio:checked + .filter-radio-content {
    background-color: $c-green;
    box-shadow: $Shadow-base;
  }
  .filter-radio:focus + .filter-radio-content {
    background-color: $c-orange;
  }

  @media screen and (max-width: 500px){
    .filter-wrapper {
      margin: 15px 10px;
    }

    .filter-radio-wrapper {
      justify-content: center;
    }
}

</style>
