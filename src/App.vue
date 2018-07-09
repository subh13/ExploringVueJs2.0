<template>
  <!--<app-quotes>-->
    <!--<h1 slot="title">This is a slot example</h1>-->
    <!--<p slot="body">Here we go</p>-->
  <!--</app-quotes>-->
  <div>
    <button @click="selectedComponent = 'appQuotes'">Quotes</button>
    <button @click="selectedComponent = 'appAuthor'">Author</button>
    <button @click="selectedComponent = 'appNew'">New</button>
    {{selectedComponent}}
    <component :is="selectedComponent">
      <p>Default</p>
    </component>
  </div>
</template>

<script>
  import New from './components/New.vue';
  import Author from './components/Author.vue';
  import Quotes from './components/Quotes.vue';
  export default {
    data: function () {
      return {
        selectedComponent: 'appQuotes'
      }
    },
    components: {
      appQuotes: Quotes,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style scoped>
</style>
