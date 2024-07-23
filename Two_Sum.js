/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = new Map();
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(result.has(diff)){
            return [i,result.get(diff)];
        }
        result.set(nums[i],i);
    }
};