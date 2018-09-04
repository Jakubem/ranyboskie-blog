<template>
  <main class="main-wrapper">
    <header-nav>
    </header-nav>
    <hero>
    </hero>
    <pagination>
    </pagination>
  </main>
</template>

<script>
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://localhost:1337';
  const strapi = new Strapi(apiUrl);
  import Pagination from '../components/Pagination.vue'
  import HeaderNav from '../components/HeaderNav.vue'
  import Sidebar from '../components/Sidebar.vue'
  import Hero from '../components/Hero.vue'
  export default {
    components: {
      Pagination,
      HeaderNav,
      Sidebar,
      Hero
    },
    data () {
      return {
        PageUrl: `${window.location.href}quiz`,
        Dark: '#6013cc',
      }
    },
    mounted: async function() {
    },
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';
</style>