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
