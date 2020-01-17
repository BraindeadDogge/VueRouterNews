<template>
  <div id="app">
    <v-app id="inspire">
    
    <v-app-bar
      app
      color="indigo"
      dark
    >
     
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y transition="scroll-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Language
        </v-btn>
      </template>
      <v-list>
        <v-list-item><v-list-item-title><router-link to="/">Russian</router-link></v-list-item-title></v-list-item>
        <v-list-item><v-list-item-title><router-link to="/us">US</router-link></v-list-item-title></v-list-item>
        <v-list-item><v-list-item-title><router-link to="/ua">Ukrainian</router-link></v-list-item-title></v-list-item>
        <v-list-item><v-list-item-title><router-link to="/no">Norwegian</router-link></v-list-item-title></v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>

    <v-content>
      <v-container style="display: flex; justify-content: space-around;">
        <router-view :ru="textru" :ua="textua" :us="textus" :no="textno"></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      textru: [],
      textus: [],
      textua: [],
      textno: [],
    }
  },
  methods: {

  },
  mounted() {
    axios.get('https://newsapi.org/v2/top-headlines?country=ru&apiKey=d7f41a32c26b4bbfb596d58b1a54c766')
    .then((response) => {
      this.textru = response.data.articles
      console.log('ru', this.textru)
    })
    
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d7f41a32c26b4bbfb596d58b1a54c766')
    .then((response) => {
      this.textus = response.data.articles
      console.log('us', this.textus)
    })
    
    axios.get('https://newsapi.org/v2/top-headlines?country=ua&apiKey=d7f41a32c26b4bbfb596d58b1a54c766')
    .then((response) => {
      this.textua = response.data.articles
      console.log('ua', this.textua)
    })
    
    axios.get('https://newsapi.org/v2/top-headlines?country=no&apiKey=d7f41a32c26b4bbfb596d58b1a54c766')
    .then((response) => {
      this.textno = response.data.articles
      console.log('no', this.textno)
    })
    
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
