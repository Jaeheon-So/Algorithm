function solution(q1, q2) {
    let arr = [...q1, ...q2]
    let q1Sum = q1.reduce((acc, cur) => acc + cur, 0)
    let q2Sum = q2.reduce((acc, cur) => acc + cur, 0)
    let target = (q1Sum + q2Sum) / 2
    
    if(q1Sum === q2Sum) return 0
    if((q1Sum + q2Sum) % 2 != 0) return -1
    // -------------------------------------------------
    let l = 0
    let r = q1.length - 1
    let sum = q1Sum
    let cnt = 0
    
    while(l <= r){
        if(cnt > q1.length*3) return -1
        if(sum === target){
            return l + (r - (q1.length) + 1)
        }
        
        if(sum < target){
            r++
            sum += arr[r % arr.length]
        } else if(sum > target) {
            sum -= arr[l % arr.length]
            l++
        }
        cnt++
    }
    
    
    return -1
}






















// let answer = Infinity;
//     let q1Sum = 0
//     let q2Sum = 0
//     let q = [...q1, ...q2]
//     let p1 = 0
//     let p2 = q1.length
    
//     for(let i = 0; i < q1.length; i++) {
//         q1Sum += q1[i]   
//         q2Sum += q2[i]   
//     }
    
//     if(q1Sum === q2Sum) return 0
//     if((q1Sum + q2Sum) % 2 != 0) return -1
    
//     let half = (q1Sum + q2Sum) / 2
    
//     for(let cnt = 0; cnt < q1.length *2.5; cnt++){
//         if(half === q1Sum) return cnt
        
//         if(q1Sum > half){
//             q1Sum -= q[p1++ % q.length]
//         }else{
//             q1Sum += q[p2++ % q.length]
//         }
//     }
    
    
    
//     return -1;
