const _ = require('lodash');

const items = [1, [2, [4, 6, 8, 'abhi']]];

const newItems = _.flattenDeep(items);

console.log(newItems);