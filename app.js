new Vue({
    el: "#monster",
    data: {
        title : "I'm bout to go off in a second"
    },
    methods: {
        attack: function () {
            alert('lets attack');
        },
        specialAttack: function () {
            alert('Special Attack');
        },
        healMe: function () {
            alert('heal');
        },
        giveUp: function () {
            alert('give up');
        }
    }
})