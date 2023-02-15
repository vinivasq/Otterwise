var twoSum = function(nums, target) {

    let output = []
    nums.forEach((num, index) => {
        if(nums.length > 2){
            for (let i = 0; i < nums.length; i++) {
                if((num + nums[i]) == target && nums[i] != num[i]) {                
                    return output = [i, index]
                }      
            }
        }
        else if(nums.length == 2 && (num + nums[index+1]) == target) {
            return output = [index, index+1]
        } 
    }
)
    
    return output
};

let values = [2,7,11,15]
let values2 = [3,2,4]
let values3 = [3,3]
let values4 = [3,2,3]
let target = 9
let target2 = 6
let target3 = 6
let target4 = 6

console.log(twoSum(values4, target4))