new Vue({
    el: "#monster",
    data: {
        monsterLifePercentage : 100,
        myLifePercentage: 100,
        attackArray: [1,2,3,4,5,6,7,8,9,10],
        specialAttackArray: [10,20,30,40,50,60,70,80,90],
        attackWatcher: 0,
        spAttackWatcher: 0,
        winnerFlgYou: false,
        winnerFlgMonster: false,
        showHideLogs: false,
        healCounter: 0,
        attackLogs: []
    },
    methods: {
        /**
         * this function generate a random number between 0 and 9
         * @returns {number}
         */
        generateRandomNumber: function () {
            var num = Math.floor(Math.random() * 10);
            if (num <= 10) {
                return num;
            }
        },
        /**
         * this function hits when you hit attack button
         */
        attack: function () {
            var arrIndex = this.generateRandomNumber();
            if (this.attackArray.hasOwnProperty(arrIndex)) {
                this.attackWatcher += 1;
                this.monsterLifePercentage -= this.attackArray[arrIndex];
                this.attackLogs.push("Monster's life reduced by "+this.attackArray[arrIndex]);
            } else {
                console.error("Dev Hint: Number returns from generateRandomNumber() is more than 9");
            }

        },
        /**
         * this function hits when you click special attack button
         */
        specialAttack: function () {
            var arrIndex = this.generateRandomNumber();
            if (this.specialAttackArray.hasOwnProperty(arrIndex)) {
                this.spAttackWatcher += 1;
                this.monsterLifePercentage -= this.specialAttackArray[arrIndex];
                this.attackLogs.push("Monster's life reduced by "+this.specialAttackArray[arrIndex]);
            } else {
                console.error("Dev Hint: Number returns from generateRandomNumber() is more than 9");
            }
        },
        /**
         * this function gives you a lil of your lost life but just for twice
         */
        healMe: function () {
            if (this.myLifePercentage === 100) {
                alert('You need to have life less than 100%');
            } else {
                if (this.healCounter < 2) {
                    var arrIndex = this.generateRandomNumber();
                    if (this.attackArray.hasOwnProperty(arrIndex)) {
                        var checkValue = this.myLifePercentage + this.attackArray[arrIndex];
                        if (checkValue <= 100) {
                            this.myLifePercentage = checkValue;
                        } else {
                            this.healMe();
                        }
                    } else {
                        console.error("Dev Hint: Number returns from generateRandomNumber() is more than 9");
                    }
                    this.attackLogs.push("Your life heals up by "+this.attackArray[arrIndex]);
                    this.healCounter++;
                } else {
                    alert('You can heal up to 2 times only');
                }
            }
        },
        /**
         * if you give up monster should win
         */
        giveUp: function () {
            var sure = confirm('Are you sure?');
            if (sure) {
                this.winnerFlgMonster = true;
            }
        },
        /**
         * this function also hit when you hit attack but this is monster attack
         * @param type
         */
        attackBack: function (type) {
            var arrIndex = this.generateRandomNumber();
            if (type === '_re') {
                if (this.attackArray.hasOwnProperty(arrIndex)) {
                    this.myLifePercentage -= this.attackArray[arrIndex];
                    this.attackLogs.push("Your life reduced by "+this.attackArray[arrIndex]);
                }
            } else {
                if (this.specialAttackArray.hasOwnProperty(arrIndex)) {
                    this.myLifePercentage -= this.specialAttackArray[arrIndex];
                    this.attackLogs.push("Your life reduced by "+this.specialAttackArray[arrIndex]);
                }
            }
        }
    },
    watch: {
        /**
         * when somebody try to attack this watcher hits for calling attack back
         */
        attackWatcher : function () {
            this.attackBack('_re');
        },
        /**
         * when somebody click on special attack this watcher hits for attack back
         */
        spAttackWatcher: function () {
            this.attackBack('_sp');
        },
        /**
         * check for life percentage become minus or not for monster
         */
        monsterLifePercentage : function () {
            if (this.monsterLifePercentage <= 0) {
                this.monsterLifePercentage = 0;
                if (this.monsterLifePercentage <= this.myLifePercentage) {
                    this.winnerFlgYou = true;
                } else if (this.monsterLifePercentage == this.myLifePercentage) {
                    alert('Match Draw play again');
                } else {
                    this.winnerFlgMonster = true;
                }
            }
        },
        /**
         * check for life percentage become minus or not for you
         */
        myLifePercentage : function () {
            if (this.myLifePercentage <= 0) {
                this.myLifePercentage = 0;
                if (this.monsterLifePercentage <= this.myLifePercentage) {
                    this.winnerFlgYou = true;
                } else if (this.monsterLifePercentage == this.myLifePercentage) {
                    alert('Match Draw play again');
                } else {
                    this.winnerFlgMonster = true;
                }
            }
        }
    }
});