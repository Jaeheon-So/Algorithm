function solution(order) {
    let belt = Array(order.length).fill(0).map((_, i) => order.length - i)
    let answer = []
    let temp = []
    
    for(let i = 0; i < order.length; i++){
        if(belt.length > 0 && belt[belt.length - 1] === order[i]){
            answer.push(belt.pop())
        } else if(temp.length > 0 && temp[temp.length - 1] === order[i]){
            answer.push(temp.pop())
        } else {
            if(belt.length === 0) break
            temp.push(belt.pop())
            i--
        }
    }
    
    return answer.length
}



















//  let answer = 0;
//     const sub = [];
//     let idx = 0;
    
//     for(let i = 1; i <= order.length; i++){
//         if(order[idx] === i){
//             answer++
//             idx++
//         }else{
//             sub.push(i)
//         }
        
//         while(true){
//             if(sub.length === 0) break
//             if(order[idx] === sub[sub.length - 1]){
//                 answer++
//                 idx++
//                 sub.pop()
//             } else{
//                 break
//             }
//         }
//     }
  

//     return answer;



//     let answer = 0;
//     let main = Array.from({length: order.length}, (_, i) => order.length - i) 
//     let sub = [] // 보조
//     let idx = 0
    
//     while(true){
//         if(idx === order.length) return answer
//         if(main.length === 0) {
//             if(sub.length === 0) return answer
//             if(order[idx] === sub[sub.length - 1]){
//                 answer++
//                 idx++
//                 sub.pop()
//                 continue
//             }else{
//                 return answer
//             }
//         }
//         let box = main[main.length - 1]
//         if(order[idx] === box){
//             answer++
//             idx++
//             main.pop()
//         } else{
//             if(sub.length > 0 && order[idx] === sub[sub.length - 1]){
//                 answer++
//                 idx++
//                 sub.pop()
//             } else{
//                 sub.push(main.pop())
//             }
//         }
//     }
    
//     return answer;