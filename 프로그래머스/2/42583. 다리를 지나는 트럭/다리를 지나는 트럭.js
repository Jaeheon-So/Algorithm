function solution(bl, w, tw) {
    let answer = 0
    let tq = [...tw]
    let bq = Array(bl).fill(0)
    let sum = 0
    
    while(true){
        answer++
        sum -= bq.pop()
        
        if(sum + tq[0] <= w) {
            let n = tq.shift()
            sum += n
            bq.unshift(n)
        } else{
            bq.unshift(0)
        }
        
        if(sum === 0 && tq.length === 0) break
    }
    
    return answer
}






















//   let answer = 0;
//     let q = Array(bl).fill(0)
//     let sum = 0
    
//     answer++
//     sum -= q.shift()
//     sum += tw[0]
//     q.push(tw.shift())
    
//     while(true){
//         if(sum <= 0){
//             break
//         }
//         answer++
//         sum -= q.shift()
        
//         let temp = tw.length === 0 ? 0 : tw[0]
//         if(sum + temp > w){
//             q.push(0)
//             continue
//         } else{
//             sum += temp
//             if(temp !== 0)
//                 q.push(tw.shift())
//             else
//                 q.push(0)
//         }
//     }
    
//     return answer;
