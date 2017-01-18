
let Player = require('./player');
let Team = require('./team');

window.addEventListener('load', function () {
    console.log('GAME 2');
    
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
    c.team[1].tag(r.team[3]);
    r.team[1].tag(r.team[2]);
    c.team[3].tag(r.team[0]);
    c.team[3].tag(r.team[1]);
    c.team[2].tag(r.team[2]);


    c.won(r);
    r.won(c);

});