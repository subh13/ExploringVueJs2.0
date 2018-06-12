new Vue({
    el: '#exercise',
    data: {
        highlightClass: false,
        buttonFlag: false,
        buttonText: 'Start Effect',
        interval:'',
        customDivFlag: false,
        boldClassFlag: false,
        typedClass: '',
        typedClassNew: '',
        isActive: false,
        classStatus: '',
        typedColor: '',
        myRefWidth: 0,
        interval2: ''
    },
    methods: {
        /**
         * generate red and grey effect
         * @returns {number}
         */
        startEffect: function() {
            this.checkButton();
            var vm = this;
            if (this.buttonFlag) {
                vm.interval = setInterval(function () {
                    vm.highlightClass = !vm.highlightClass;
                }, 1000);
            } else {
                window.clearInterval(this.interval);
                console.log('loop break');
                return 0;
            }
        },
        /**
         * toggle buton text
         */
        checkButton: function () {
            this.buttonFlag = !this.buttonFlag;
            if (this.buttonFlag) {
                this.buttonText = 'Stop Effect';
            } else {
                this.buttonText = 'Start Effect';
            }
        },
        /**
         * start progress bar
         */
        startProgress: function () {
            var vm = this;
            if (this.myRefWidth == 0) {
             this.interval2 = setInterval(function () {
                if (vm.myRefWidth < 100) {
                    vm.myRefWidth += 10;
                    console.log(vm.myRefWidth);
                } else {
                    vm.stopProgress();
                }
             },1000);
            }
        },
        /**
         * stop progress bar on 100%
         */
        stopProgress: function () {
            window.clearInterval(this.interval2);
        }
    }
});