<template>
  <main class="main-wrapper">
    <header-nav>
    </header-nav>
    <div class="article-KV-wrapper">
      <img v-if="KV != ''"
        :src="`http://rany-admin.ranyboskie.pl:1337/${KV}`" 
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
        <a 
          class="twitter-share-button"
          :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(link)}`"
          target="_blank">
          <i-twitter></i-twitter>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import { markdownItTable } from 'markdown-it-table';
  import HeaderNav from '../components/HeaderNav.vue';
  import SocialSharing from 'vue-social-sharing';
  import iTwitter from '.././components/icons/i-twitter.vue' 
  import Moment from 'moment';
  const md = new MarkdownIt({
    html: true,  
  });
  md.use(markdownItTable);
  md.disable('code');
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://rany-admin.ranyboskie.pl:1337';
  const strapi = new Strapi(apiUrl);
  export default {
    components: {
      HeaderNav,
      iTwitter
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
              createdAt
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
      this.createdAt = Moment(data.data.articles[0].createdAt).format('MMM Do, YYYY');
      this.body = md.render(data.data.articles[0].Body);
    },
    data () {
      return {
        article: {},
        KV: '',
        KV_Alt: '',
        Content_brief: '',
        createdAt: '',
        headline: '',
        body: '',
        link: decodeURIComponent(window.location.href),
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
  .article-content {
    max-width: 740px;
    // margin: 0 0 10px 0;
    color: $c-black;
    background-color: $c-white;
  }  
  .article-KV-wrapper {
    // overflow: hidden;
    margin: 50px 0 80px 0;
    padding: 0;
    // height: 100%;
    box-sizing: border-box;
  }

  .svg-icon {
    fill: $c-blue-twitter;
    filter: none;
    &:hover {
      fill: $c-blue-twitter-hover;
    }
  }

  .article-KV {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-left: 20px solid $c-purple;
  }
  .headline {
    font: $f-h1;
    margin-top: 20px;
    text-align: center;
    letter-spacing: 1.3px;
    padding: 0;
    color: $c-black;
    line-height: $f-line-h1;
  }

  .article-created-at {
    font: $f-p;
    color: $c-gray-dark;
    text-align: center;
  }

  .article-brief {
    font: $f-p-b;
    line-height: $f-line;
    word-break: break-word;
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px 0 70px;
    margin-top: 30px;
  }

  .article-body {
    margin-top: 50px;
    font: $f-p;
    line-height: $f-line;
    white-space: pre-wrap;
    padding: 0 50px 0 50px;
  }

  .article-social {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  .twitter-share-button {
    margin-right: 10px;
  }

  @media screen and (max-width: 500px){
    .article-brief {
      padding: 10px;
      font: $f-p-b-mob;
      margin-top: 5px; 
    }
    .article-body {
      padding: 10px;
      margin-top: 5px;
      font: $f-p-mob;
    }
    .headline {
      font: $f-h1-mob;
      margin: 5px 0;
    }
    .article-social {
      margin-bottom: 10px;
    }
  }

</style>