(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
