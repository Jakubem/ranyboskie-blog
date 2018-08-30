<template>
  <div class="card-wrapper">
    <paginate name="card" 
      :list="card" 
      :per="3"
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
            articles {
              _id
              Headline
              Content_brief
              Body
              URL
              KV {
                url
              }
            }
          }`
        }
      })
    this.card = data.data.articles;
    },
  }
</script>
<style lang="scss">
  @import '../../css/_var.scss';
  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .paginate-list {
    list-style: none;
    height: 100%;
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