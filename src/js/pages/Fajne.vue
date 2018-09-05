<template>
  <main class="main-wrapper">
    <header-nav>
    </header-nav>
    <div class="article-KV-wrapper">
      <img v-if="KV != ''"
        :src="`//localhost:1337/${KV}`" 
        :alt="KV_alt" 
        class="article-KV">
    </div>
    <div class="article-content">
      <time class="article-created-at">
        {{ createdAt }}
      </time>
      <h2 class="headline">
        {{ article.Headline }}
      </h2>
      <p 
        class="article-brief" 
        v-if="KV != ''"
        v-html="Content_brief">
      </p>
      <div 
        v-html="body" 
        class="article-body">
      </div>
      <hr>
      <div class="article-social">
      </div>
    </div>
  </main>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import { markdownItTable } from 'markdown-it-table';
  import HeaderNav from '../components/HeaderNav.vue';
  import SocialSharing from 'vue-social-sharing';
  const md = new MarkdownIt({
    html: true,  
  });
  md.use(markdownItTable);
  md.disable('code');
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://localhost:1337';
  const strapi = new Strapi(apiUrl);
  export default {
    components: {
      HeaderNav,
    },
    mounted: async function() {
      const data = await strapi.request('post', '/graphql', {
        data: {
          query:
          `query {
            articles (where: {
              URL: "${articleUrl}"
            }) {
              URL
              Headline
              Body
              Content_brief
              createdAt
              KV_alt
              KV {
                url
              }
            }
          }`
        }
      })
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
      
    }
  }
</script>
 <style lang="scss" scoped>
  @import '../../css/_var.scss';
 
</style>