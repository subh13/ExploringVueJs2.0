new Vue({
    el: '#dynamic-styling',
    data: {
        title: 'dynamic styling with css classes',
        attachRed: false,
        color: 'blue',
        typedColor: 'grey'
    },
    computed: {
        showStatus: function () {
            // to test only
            console.log(this.attachRed);
        }
    }
})