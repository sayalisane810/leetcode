/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let map = {};
    let pairs = 0;
    let remaining = 0;

    nums.forEach(item => {
        map[item] = ++map[item] || 1;
        if (map[item] % 2 === 0) pairs++;
    })

    for (let key in map) {
        if (map[key] % 2 !== 0) remaining++;
    }

    return [pairs, remaining];
};