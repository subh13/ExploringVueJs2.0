<template>
  <div>
    <div class="quote" v-for="(quote, index) in quotes">{{ quote }}</div>
  </div>
</template>

<script>
    export default {
      props: {
        quotes: ''
      }
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Caveat');
  .quote {
    border: 2px solid #CCC;
    width: 30%;
    height: 120px;
    border-radius: 2px;
    text-align: center;
    margin: 4px 0px 4px 0px;
    background: whitesmoke;
    font-family: Caveat;
    font-size: 25px;
  }
</style>
