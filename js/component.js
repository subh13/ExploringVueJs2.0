// this is same as creating directive in angular
// and this template should have one html element like h1 tag or div or p tag else it won't work
Vue.component('my-directive',{
    template: '<p>this is a custom directive!</p>'
});
var vm = new Vue({
   el: '#app',
    data : {
        title: 'his'
    }
});