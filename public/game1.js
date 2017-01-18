(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Steps/Rules/Objectives:
 * 
 * 1. Make a 'Player' constructor that allows you to create players.
 * 2. Make two teams, 'Runners' and 'Chasers' (arrays?), made up of the players. 
 *    Each team has certain rules and objectives...
 *      - Runners:
 *          - have a frozen property that, if true, prohibits them from tagging
 *            other runners to unfreeze them.
 *          - runners become unfrozen when tagged by another unfrozen runner.
 *          - have a flag property (true or false).
 *          - win the game when one runner picks up the flag (when flag property is true).
 * 
 *      - Chasers:
 *          - can tag runners to freeze them.
 *          - win the game when all runners are frozen.
 * 
 * 3. Make a tag function that accepts two players as arguments. Depending on which
 *    team they are on *something* will happen. 
 *      - if a chaser and a runner are matched up together the runner becomes frozen
 *          - if all runners are frozen the chasers win
 *      - if an unfrozen runner is matched with a frozen runner, the frozen runner becomes unfrozen
 *      - if two frozen runners are matched nothing happens
 *      - if two unfrozen runners are matched nothing happens
 *      - if two chasers are matched nothing happens 
 * 
 * 4. Make a getFlag function that accepts a player as an argument.
 *      - if the player is a chaser nothing happens
 *      - if the player is a runner, the runners win the game
 */

let Player = require('./player');
let Team = require('./team');

window.addEventListener('load', function () {
    console.log('GAME 1');
    
    /* Creating players */
    let runners = ['Ed', 'Greg', 'Gredge', 'Derg'];
    let chasers = ['Gred', 'Dreg', 'Gerg', 'Cheff'];

    /* Creating teams */
    let r = new Team('runners');
    let c = new Team('chasers');

    /* Adding players to teams */
    for (let i = 0; i < runners.length; i++) {
        let next = new Player(runners[i]);
        r.add(next);
    }

    for (let i = 0; i < chasers.length; i++) {
        let next = new Player(chasers[i]);
        c.add(next);
    }

    /* Logs the two teams */
    console.log(r);
    console.log(c);

    /* Testing gameplay with tag function */
    c.team[0].tag(r.team[2]);
    c.team[1].tag(c.team[2]);
    r.team[0].tag(r.team[2]);
    c.team[3].tag(r.team[0]);
    r.team[3].tag(r.team[0]);
    c.team[2].tag(r.team[1]);

    r.team[0].getFlag();

    c.won(r);
    r.won(c);

});

},{"./player":2,"./team":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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



},{}]},{},[1]);
