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
    position: fixed;
    top: 0;
    height: 40px;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $c-white;
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
