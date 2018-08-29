<template>
  <button @click="btnClick(obj)" class="option">
    {{ obj }}
  </button>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    methods:  {
        btnClick: function (v) {
          this.$emit('optionPicked', v);
        },
    },
    props: ['obj'],
}
</script>

<style lang="scss">
  @import '../../css/_var.scss';
  .option {
    height: 90px;
    width: 250px;
    border: none;
    border-radius: 3px;
    background-color: $c-purple-light;
    margin: 10px;
    padding: 0;
    font: $f-option;
    color: $c-black;
    box-shadow: 0px 3px 10px -6px rgba(0,0,0,0.4);
    transition: box-shadow .2s;
    overflow-wrap: break-word;
    box-sizing: border-box;
  }
    .question {
    text-align: center;
    background-color: $c-white;
    margin: 10px;
    padding: 10px;
    height: 150px;
    font: $f-question;
  }

  .option:hover {
    box-shadow: 0px 4px 15px -6px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 600px) {
    .option {
      height: 70px;
      width: 150px;
      margin: 10px;
      font: $f-option-mob;
    }
    .question {
      margin: 7px;
      padding: 7px;
      height: 100px;
      font: $f-question-mob;
    }
  }
</style>