// vue instance #1
var vm1 = new Vue({
   data: {
      title: 'Hello World!',
      link: 'https://www.invoicingyou.com',
      finishedLink: '<a href="https://www.google.com">Google</a>',
      counter: 0,
      myvalue: '',
      modelbind: 'Im getting bound'
   },
   computed: {
        output: function () {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
   watch: {
       counter: function (value) {
           var vm = this;
           setTimeout(function () {
               vm.counter = 0;
           } ,2000);
       }
   },
   methods: {
       changeTitle: function (event) {
           this.title = event.target.value;
       },
       increase: function () {
           this.counter++;
       },
       alertMe: function () {
           console.info('this is an alert');
       },
       alertSomething: function () {
           alert('hey this is an alert');
           console.log(this.$refs.counterButton.innerText);
       },
       saveValue: function (event) {
           this.myvalue = event.target.value;
       },
       saveValueOnlyEnter: function (event) {
            this.myvalue = event.target.value;
       }
   }
});
vm1.$mount('#app');

// vue instance #2
var vm2 = new Vue({
    template: '<h1>Nigga</h1>'
});
vm2.$mount('#app3');