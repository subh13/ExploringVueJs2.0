new Vue({
   el: '#app',
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
       },
       saveValue: function (event) {
           this.myvalue = event.target.value;
       },
       saveValueOnlyEnter: function (event) {
            this.myvalue = event.target.value;
       }
   }
});