'use strict';

const multipliers = require('./multipliers');

function calcRepMaxes(opt={}){
    const { reps, weight } = opt;

    if(!(reps && weight))        throw new Error('Must supply reps and weight');
    if(!(reps > 0 && reps < 16)) throw new Error('Reps must be between 1-15');

    const data = {};

    for(const groupName in multipliers){

        const group    = multipliers[groupName],
              repMaxes = {};
        
        const oneRepMax = reps === 1 ? weight : Math.round(weight * group[reps]);
    
        Object.keys(group).forEach(repMax => {
            repMaxes[repMax] = Math.round(oneRepMax / group[repMax]);
        });

        data[groupName] = repMaxes;
    }

    return data;
}

module.exports = calcRepMaxes;

const maxes = calcRepMaxes({ reps: 10, weight: 225 });

//console.log(JSON.stringify(maxes, null, 2));
