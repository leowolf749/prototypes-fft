(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
