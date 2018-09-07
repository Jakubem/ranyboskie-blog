<template>
  <header class="header">
    <router-link class="header-logo" tag="h1" to="/">
        Ranyboskie
    </router-link>
    <nav class="header-nav">
      <button @click="menuOpen = !menuOpen" class="hamburger">
        <i-hamburger></i-hamburger>
      </button>
      <ul class="header-ul" :class="{open: menuOpen}">
        <li class="header-li">
          <router-link tag="a" to="/fajne-rzeczy" class="header-link" aria-label="zobacz fajne rzeczy">
            fajne rzeczy
          </router-link>
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
  import iHamburger from './icons/i-hamburger.vue' 
  export default {
    components: {
      iGithub,
      iInstagram,
      iTwitter,
      iHamburger,
    },
     data () {
      return {
        menuOpen: false
      }
    },
    methods: {
      // openMenu: function() {
        // this.menuOpen = 
      // }
    }
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
    padding: 0 5px;
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
    margin: 0;
    box-sizing: border-box;
  }

  .header-li {
    list-style: none;
    margin: 0 5px;
    padding: 0;
    max-height: 40px;
    box-sizing: border-box;
    // border-collapse: collapse;
  }

  .header-logo {
    font: $f-h2-logo;
    color: #fff;
    letter-spacing: $f-l-spacing-hi;
    margin: 0;
    transform: rotate(-1.5deg);
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
    box-sizing: border-box;
    letter-spacing: $f-l-spacing;
    &:hover {
      text-decoration: underline;
    }
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    margin-right: 5px;
  }

  @media screen and (max-width: 600px){
    .header-logo {
      font: $f-h2-logo-mob;
      margin: 0;
    }
    .header-link {
      font: $f-link-mob;
    }
    .header-li {
      padding: 15px;
    }
  }
  @media screen and (max-width: 500px){
    .hamburger {
      display: block;
    }
    .header-nav {
      display: flex;
      flex-direction: row;
    }
    .header-li {
      padding: 10px;
    }
    .header-ul {
      position: absolute;
      top: -100px;
      right: 100px;
      // overflow: hidden;
    }
    .open {
      flex-direction: column;
      justify-content: flex-end;
      background: $c-purple;
      top: 0;
      right: 0;
      padding: 40px 0 10px 0;
      z-index: -1;
      border-radius: 0 0 0 25px;
    }
  }
</style>
