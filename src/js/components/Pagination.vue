<template>
  <div class="pagination-wrapper">
    <h3 class="pagination-title">
      Ostatnie wpisy:
    </h3>
    <paginate name="card" 
      :list="card" 
      :per="4"
      class="paginate-list">
      <li 
        v-for="el in paginated('card')" 
        :key="el.id">
        <article-card 
          :obj="el">
        </article-card>
      </li>
      </paginate>
      <paginate-links
        for="card"
        :limit="2"
        :show-step-links="true">
      </paginate-links>
    </div> 
</template>

<script>
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://localhost:1337';
  const strapi = new Strapi(apiUrl);
  import ArticleCard from './ArticleCard.vue'
  export default {
    components: {
      ArticleCard,
    },
    data () {
      return {
        card: [],
        paginate: ['card'],
      }
    },
    mounted: async function() {
      const data = await strapi.request('post', '/graphql', {
        data: {
          query: 
          `query {
            articles (where: {
              Published: true
            }) {
              _id
              Headline
              Content_brief
              Body
              KV_alt
              createdAt
              URL
              KV {
                url
              }
            }
          }`
        }
      })
    this.card = (data.data.articles).slice(0, 12);
    },
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';

  .pagination-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    height: 100%;
    // width: 100%;
    flex: 1;
  }

  .pagination-title {
    font: $f-title;
    margin: 0 0 0 20px;
    align-self: flex-start;
    color: $c-black;
  }

  .paginate-list {
    list-style: none;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .paginate-links {
    display: flex;
    font: $f-p;
    list-style: none;
  }

  .paginate-links li {
    margin: 5px;
    cursor: pointer;
    padding: 0 0 5px 0;
  }

  .paginate-links .active {
    border-bottom: 2px solid $c-green;
  }

  @media screen and (max-width: 600px) {

  }
</style>