<template>
  <div id="app" class="container">
    <!--progress bar start-->
    <div class="progress form-group">
      <div class="progress-bar progress-bar-striped " role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">1/10</div>
    </div>
    <!--progress bar end-->
    <!--add quotes start-->
    <form>
      <div class="form-group">
        <label for="add_quote"><h1>Add Quote</h1></label>
        <textarea id="add_quote" cols="10" rows="5" class="form-control" v-model="myQuotes"></textarea>
      </div>
      <button type="button" class="btn btn-primary" @click.prevent="createNewQuote">Primary</button>
    </form>
    <!--add quotes end-->
    <!--Quote Listing start-->
    <app-quote :quotes="quotes"></app-quote>
    <!--Quote Listing end-->
    <div class="alert alert-info q-info" style="text-align: center;"><i class="fa fa-star" aria-hidden="true"></i> Click on the quote to delete it</div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  export default {
    data: function () {
      return {
        myQuotes: '',
        quotes:[]
      };
    },
    components : {
      appQuote: Quote
    },
    methods: {
      createNewQuote() {
        this.quotes.push(this.myQuotes);
        this.myQuotes = '';
      }
    }
  }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Caveat');
  .container {
    margin-top: 60px;
  }
  h1 {
    font-family: Caveat;
  }
</style>
