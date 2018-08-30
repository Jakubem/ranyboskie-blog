<template>
  <main class="main-wrapper">
    <header-nav>
    </header-nav>
    <div class="article-content">
      <div class="article-header">
        <img v-if="KV != ''"
          :src="`//localhost:1337/${KV}`" 
          :alt="KV_alt" 
          class="page-KV">
      </div>
      <h1 class="headline">
        {{ article.Headline }}
      </h1>
      <p 
        class="article-brief" 
        v-if="KV != ''" 
        v-html="Content_brief">
      </p>
      <div 
        v-html="body" 
        class="article-body">
      </div>
    </div>
  </main>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import HeaderNav from '../components/HeaderNav.vue'
  const md = new MarkdownIt({
    html: true,  
  });
  md.disable('code');
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://localhost:1337';
  const strapi = new Strapi(apiUrl);
  export default {
    components: {
      HeaderNav
    },
    mounted: async function() {
     const articleUrl = this.$route.query.page;
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
              KV_alt
              KV {
                url
              }
            }
          }`
        }
      })
      if (data.data.articles.length === 0) {
        this.$router.push('/404')
      }
      this.article = data.data.articles[0];
      this.KV = data.data.articles[0].KV.url;
      this.KV_alt = data.data.articles[0].KV_alt;
      this.Content_brief = data.data.articles[0].Content_brief;
      this.body = md.render(data.data.articles[0].Body);
    },
    data () {
      return {
        article: {},
        KV: '',
        KV_Alt: '',
        Content_brief: '',
        headline: '',
        body: ''
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
  .main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
  }
  .article-content {
    max-width: 740px;
  }  
  .article-header {
    overflow: hidden;
  }
  .page-KV {
    width: 100%;
    height: 100%;
  }
  .headline {
    font: $f-h1;
    margin-top: 50px;
    padding: 0 50px 0 50px;
  }

  .article-brief {
    font: $f-p-b;
    white-space: pre;
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px 0 70px;
    margin-top: 30px;
  }

  .article-body {
    margin-top: 50px;
    font: $f-p;
    white-space: pre-wrap;
    padding: 0 50px 0 50px;
  }
  .article-body img {
    width: 80%;
    margin: 0 auto;
  }
</style>