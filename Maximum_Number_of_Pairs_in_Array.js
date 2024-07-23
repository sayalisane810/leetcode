/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    if(nums.length == 1){
        return [0,1];
    }
    
    const map = {};
    let pairs = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            delete map[nums[i]];
            pairs++;
        } else {
            map[nums[i]] = 1;
        }
    }
    return [pairs, Object.values(map).length];
};