<template>
  <div class="article-card">
    <a :href="`/#/article?page=${obj.URL}`" class="article-link">
      <img class="article-KV" 
        :src="`http://localhost:1337/${obj.KV.url}`" 
        alt="">
      <h2 class="article-headline">
        {{ obj.Headline }}
      </h2>
    </a>
    <div class="article-brief">
      <p class="article-brief-p">
        {{ obj.Content_brief }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['obj']
  }
</script>

<style lang="scss">
  @import '../../css/_var.scss';
  .article-headline {
    font: $f-h2;
    color: #000;
  }
  .article-link {
    text-decoration: none;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .article-KV {
    height: auto;
    width: 200px
  }
  .article-brief {
    width: 50%;
  }
  .article-brief-p {
    font: $f-p-b;
    word-break: break-all;
  }
  .article-card {
    border: 1px solid black;
    margin: 10px;
    padding: 5px;
    min-height: 150px;
    display: flex;
    justify-content: space-between;
  }
  .headline {
    font: $f-h1;
  }
</style>
