module.exports = function Team(name) {
    this.name = name;
    this.team = [];
    
    this.add = function (player) {
        this.team.push(player);
        player.team = this.name;
    };

    this.won = function (opponent) {
        if (this.name === 'chasers') {
            for (let i = 0; i < opponent.team.length; i++) {
                if (opponent.team[i].isFrozen === false) {
                    return false;
                }
            }
            console.log('Chasers WIN!!!');
            return true;
        }

        if (this.name === 'runners') {
            for (let i = 0; i < this.team.length; i++) {
                if (this.team[i].hasFlag === true) {
                    console.log('Runners WIN!!!');
                    return true;
                }
            }
            
            return false;
        }
    }

    return this;
    

};


