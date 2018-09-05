<template>
  <div class="main-wrapper">
    <header-nav>
    </header-nav>
    <category-filter :categories="allCat">
    </category-filter>
    <div class="all-cards-wrapper">
      <h3 class="all-cards-title">
        Wszystkie wpisy:
      </h3>
      <ul class="all-cards-list">
        <li 
          v-for="el in filteredCategories"
          :key="el.id">
          <article-card
            :obj="el">
          </article-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Strapi from 'strapi-sdk-javascript/build/main';
  const apiUrl = 'http://localhost:1337';
  const strapi = new Strapi(apiUrl);
  import ArticleCard from '../components/ArticleCard.vue'
  import HeaderNav from '../components/HeaderNav.vue'
  import CategoryFilter from '../components/CategoryFilter.vue'
  export default {
    components: {
      ArticleCard,
      HeaderNav,
      CategoryFilter
    },
    data () {
      return {
        cards: [],
        allCat: [],
        pickedCategory: '',
      }
    },
    mounted: async function() {
      this.pickedCategory = this.$route.query.category;

      this.$root.$on('filterChange', val => this.pickedCategory = val);
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
                KV_alt
                createdAt
                categories
                URL
                KV {
                  url
                }
              }
          }`
        }
      })

    this.cards = data.data.articles;
    
    const categoriesPerArticle = data.data.articles;

    const set = new Set();
    categoriesPerArticle.forEach(el => {
      set.add(el.categories);
    })

    this.allCat = [...set];
    },
    computed: {
      filteredCategories() {
        return this.cards.filter((el) => {
          if (this.pickedCategory) {
            return el.categories === this.pickedCategory;
          } else {
            return el.categories;
          }
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../css/_var.scss';

  .main-wrapper {
    justify-content: flex-start;
  }

  .all-cards-wrapper {
    margin: 50px 0 0 0;
  }
  .all-cards-title {
    font: $f-title;
    margin: 0 0 0 20px;
    align-self: flex-start;
  }

  .all-cards-list {
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
    .all-cards-wrapper {
      margin-top: 10px;
    }
  }
</style>