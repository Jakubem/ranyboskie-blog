<template>
  <div class="header">
    <h1 class="header-logo">
      Ranyboskie
    </h1>
    <nav>
      <ul class="header-ul">
        <li class="header-li">
          <a class="header-link" href="#">coś ważnego</a>
        </li>
        <li class="header-li">
          <a class="header-link" href="#">coś ważnego</a>
        </li>
        <li class="header-li">
          <a class="header-link" href="#">coś ważnego</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
     data () {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .header {
    width: 100%;
    height: 50px;
    background: $c-yellow;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // box-shadow: $Shadow-base;
    border-top-left-radius: $b-radius;
    border-top-right-radius: $b-radius;
    border-bottom: $b-accent;
  }
  .header-ul {
    display: flex;
  }
  .header-li {
    list-style: none;
  }
  .header-link {
    font: $f-link;
    text-decoration: none;
    padding: 5px;
  }
</style>
