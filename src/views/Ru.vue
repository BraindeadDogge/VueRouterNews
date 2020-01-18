<template>
  <div class="home">
    <v-container class="fill-height" fluid>
    <card v-for="item in ru" :key="item.id" :imglink="item.urlToImage" :newstitle="item.title" :date="item.publishedAt" :description="item.description"></card>
    </v-container>
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