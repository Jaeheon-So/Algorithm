function solution(prices) {
    let answer = []
    
    for(let i = 0; i < prices.length-1; i++){
        let cnt = 0
        for(let j = i + 1; j < prices.length; j++){
            cnt++
            if(prices[i] > prices[j]) break
        }
        answer.push(cnt)
    }
    answer.push(0)
    
    return answer
}



















//     let answer = [];
//     let stack = [];
    
//     for(let i = 0; i < prices.length - 1; i++) {
//         let cnt = 1
//         for(let j = i + 1; j < prices.length; j++) {
//             if(prices[i] <= prices[j]) cnt++
//             else break
            
//             if(j === prices.length - 1) cnt--;
//         }
//         answer.push(cnt)
//     }
    
//     answer.push(0)
//     return answer;
