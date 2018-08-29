<template>
  <main class="main-wrapper">
    <header-nav>
    </header-nav>
    <div class="body-wrapper">
      <pagination>
      </pagination>
      <sidebar>
      </sidebar>
    </div>
  </main>
</template>

<script>
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://localhost:1337';
  const strapi = new Strapi(apiUrl);
  import Pagination from '../components/Pagination.vue'
  import HeaderNav from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  export default {
    components: {
      Pagination,
      HeaderNav,
      Sidebar
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

  .body-wrapper {
    display: flex;
  }
</style>