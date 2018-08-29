<template>
  <div class="main-wrapper">
    <div class="article-header">
      <img v-if="KV != ''" 
        :src="`//localhost:1337/${KV}`" 
        :alt="KV_alt" 
        class="page-KV">
    </div>
    <h1 class="headline">
      {{ article.Headline }}
    </h1>
    <p v-html="body" class="article-body">
    </p>
  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  const md = new MarkdownIt({
    html: true,  
  });
  md.disable('code');
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://localhost:1337';
  const strapi = new Strapi(apiUrl);
  export default {
    components: {
    },
    mounted: async function() {
     const articleUrl = this.$route.query.page;
      console.log(articleUrl);
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
      this.body = md.render(data.data.articles[0].Body);
    },
    data () {
      return {
        article: {},
        KV: '',
        KV_Alt: '',
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
  .headline {
    font: $f-h1;
  }
  .main-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .page-KV {
    width: 100%;
    height: auto;
  }
  .article-header {
    max-height: 500px;
    overflow: hidden;
  }
  .article-body {
    font: $f-p;
    white-space: pre-wrap;
  }
  .article-body img {
    width: 100%;
    margin: 0 auto;
  }
</style>