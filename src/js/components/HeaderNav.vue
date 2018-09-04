<template>
  <header class="header">
    <router-link tag="h1" to="/">
      <span class="header-logo">
        Ranyboskie
      </span>
    </router-link>
    <nav>
      <ul class="header-ul">
        <li class="header-li">
          <a class="header-link" aria-label="zobacz wszystkie kategorie" href="#">
            fajne rzeczy
          </a>
        </li>
        <li class="header-li">
          <router-link tag="a" to="/wszystko" class="header-link" aria-label="zobacz wszystko">
            wszystko
          </router-link>
        </li>
        <li class="header-li">
          <a class="header-link" aria-label="github" href="https://github.com/Jakubem">
            <i-github></i-github>
          </a>
        </li>
        <li class="header-li">
          <a class="header-link" aria-label="instagram" href="https://www.instagram.com/jakub_emx/">
            <i-instagram></i-instagram>
          </a>
        </li>
        <li class="header-li">
          <a class="header-link" aria-label="twitter" href="https://twitter.com/jakubemx">
            <i-twitter></i-twitter>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import iGithub from './icons/i-github.vue' 
  import iInstagram from './icons/i-instagram.vue' 
  import iTwitter from './icons/i-twitter.vue' 
  export default {
    components: {
      iGithub,
      iInstagram,
      iTwitter
    },
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
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 40px;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $nav-gradient;
    border-radius: 0 0 25px 0;
  }

  .header-ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin-right: 0;
  }

  .header-li {
    list-style: none;
    margin-left: 0;
    padding: 10px;
    border-collapse: collapse;
  }

  .header-logo {
    font: $f-h2-logo;
    color: #fff;
    letter-spacing: $f-l-spacing-hi;
    margin-left: 4px;
    transform: rotate(-1.76deg);
    text-shadow:
      -3px 5px 0px $c-red-dimmed, 
      5px -4px 0px $c-aqua-dimmed, 
      -4px 5px 0 $c-orange-dimmed,
      6px 6px 0 $c-pink-dimmed,
      2px 2px 6px $c-black;
    cursor: pointer;
  }

  .header-link {
    font: $f-link;
    text-decoration: none;
    padding: 0;
    margin: 0;
    color: $c-white;
    letter-spacing: $f-l-spacing;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
