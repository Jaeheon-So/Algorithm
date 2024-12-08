function solution(arr) {
    let min = Math.min(...arr)
    let minIndex = arr.indexOf(min)
    arr.splice(minIndex, 1)
    
    if(arr.length <= 0) return [-1]
    
    return arr;
}