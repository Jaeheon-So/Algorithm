function solution(p, l) {
    let q = [...p].map((v, i) => [v, i])
    let answer = 0
    
    while(true){
        let [n, i] = q.shift()
        let arr = q.filter((v) => n < v[0])
        
        if(arr.length > 0)
            q.push([n,i])
        else {
            answer++
            if(i === l) break    
        }
    }
    
    return answer   
}




















//  let answer = 0;
//     let q = []
//     let order = []
        
//     for (let i = 0; i < p.length; i++) {
//       q.push(i);
//     }
//     let find = q[l]
    
//     while(q.length !== 0){
//         let flag = true
//         let temp = q.shift()
//         for(let x of q){
//             if(p[temp] < p[x]){
//                 q.push(temp)
//                 flag = false
//                 break
//             }
//         }
//         if(flag) order.push(temp)
//     }    
    
//     return order.indexOf(find) + 1;
