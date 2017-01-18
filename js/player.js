module.exports = function Player(name) {
    this.name = name;
    this.team = null;
    this.isFrozen = false;
    this.hasFlag = false;

    this.tag = function (player) {
        if (this.team === 'runners' && player.isFrozen === true && player.team === 'runners') {
            console.log(player.name + ' was unfrozen by ' + this.name);
            player.isFrozen = false;
        };
        if (this.team === 'chasers' && player.team === 'runners') {
            console.log(player.name + ' was frozen by ' + this.name);
            player.isFrozen = true;
        }  
    };
    

    this.getFlag = function () {
        if (this.team === 'runners' && this.isFrozen === false && this.hasFlag === false) {
            console.log(this.name + ' got the flag!');
            this.hasFlag = true;
        }
    };
    return this;
};