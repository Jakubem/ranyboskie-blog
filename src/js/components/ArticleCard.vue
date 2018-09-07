<template>
  <div class="card-card">
    <img class="card-KV" 
      :src="`http://rany-admin.ranyboskie.pl:1337${obj.KV.url}`" 
      :alt="obj.KV_alt">
    <div class="card-teaser">
      <h2 class="card-headline">
        {{ obj.Headline }}
      </h2>
      <p ref="clamping" class="card-brief">
        {{ obj.Content_brief }}
      </p>
      <div class="card-teaser-info">
        <time class="card-created-at">
          {{ date }}
        </time>
        <a :href="`/#/article?page=${obj.URL}`" :aria-label="`idź czytaj '${obj.Headline}'`" class="CTA card-link"> Idź czytaj </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment';
  import lineClamp from 'line-clamp';
  export default {
    props: ['obj'],
    mounted: function () {
      // make sure that this element have a line-height value
      const clamp = this.$refs.clamping;
      lineClamp(clamp, 5);
    },
    data () {
      return {
        date: Moment(this.obj.createdAt).format('MMM Do, YYYY'),
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .card-headline {
    font: $f-h2;
    color: #000;
  }

  .card-link {
    text-decoration: none;
  }

  .card-KV {
    height: 250px;
    width: 250px;
    object-fit: cover;
    margin: 10px;
    box-shadow: $Shadow-card;
    border-radius: $b-radius;
    border: 5px solid $c-white;
    box-sizing: border-box;
  }

  .card-teaser {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    padding: 10px;
  }

  .card-brief {
    font: $f-p;
    overflow: hidden;
    line-height: $f-line;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
  }
  .card-card {
    border-radius: $b-radius;
    box-shadow: $Shadow-card;
    background-color: $c-white;
    width: 500px;
    margin: 10px 20px 40px 20px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    // background-image: url('../../assets/gravel-clear.png');
  }
  
  .card-teaser-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .card-created-at {
    font: $f-p;
    color: $c-gray-dark;
  }

  .card-headline {
    font: $f-h2;
    margin: 0;
  }
  
  @media screen and (max-width: 560px){
    .card-KV {
      height: 250px;
      width: 250px;
      margin: 0 0 10px 0;
    }
    .card-teaser {
      width: 250px;
      padding: 0;
    }
    .card-card {
      width: 250px;
      flex-direction: column;
    }
  }

</style>
