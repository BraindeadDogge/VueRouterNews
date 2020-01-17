<template>
  <div class="home">
    <card v-for="item in ru" :key="item.id" :imglink="item.urlToImage" :newstitle="item.title" :date="item.publishedAt" :description="item.description"></card>
  </div>
</template>

<script>
  import card from './card'

  export default {
    components: {
      card
    },
    props: ["ru"]
  }
</script>