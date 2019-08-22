'use strict';

function Brzycki(weight, reps){
    return weight * (36 / (37 - reps));
}

function BrzyckiAlt(weight, reps){
    return weight / (1.0278 - (0.0278 * reps));
}

function Wathan(weight, reps){
    return (100 * weight) / (48.8 + (53.8 * Math.exp(-0.075 * reps)));
}

function Lander(weight, reps){
    return (100 * weight) / (101.3 - (2.67123 * reps));
}

function Epley(weight, reps){
    return weight * ( 1 + (0.0333 * reps));
}

function Lombardi(weight, reps){
    return weight * Math.pow(reps, 0.1);
}

function Mayhew(weight, reps){
    return (100 * weight) / (52.2 + (41.9 * Math.exp(-0.055 * reps)))
}

function OConner(weight, reps){
    return weight * (1 + (reps / 40));
}

module.exports = {
    Brzycki,
    BrzyckiAlt,
    Wathan,
    Lander,
    Epley,
    Lombardi,
    Mayhew,
    OConner
}