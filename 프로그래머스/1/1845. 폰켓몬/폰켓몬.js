function solution(nums) {
    let len = nums.length / 2
    let set = new Set(nums)
    
    return len <= set.size ? len : set.size
}