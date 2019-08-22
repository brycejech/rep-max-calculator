'use strict';

const formulae_coefficients = require('./coefficients');

function calcRepMaxes(opt={}){
    const { reps, weight } = opt;

    if(!(reps && weight))        throw new Error('Must supply reps and weight');
    if(!(reps > 0 && reps < 16)) throw new Error('Reps must be between 1-15');

    const data = {};

    for(const groupName in formulae_coefficients){

        const group    = formulae_coefficients[groupName],
              repMaxes = {};
        
        const oneRepMax = reps === 1 ? weight : Math.round(weight * group[reps]);
    
        Object.keys(group).forEach(repMax => {
            repMaxes[repMax] = Math.round(oneRepMax / group[repMax]);
        });

        data[groupName] = repMaxes;
    }

    return data;
}

const maxes = calcRepMaxes({ reps: 10, weight: 225 });

console.log(JSON.stringify(maxes, null, 2));