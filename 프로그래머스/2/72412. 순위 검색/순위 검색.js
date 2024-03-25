function solution(info, query) {
    let answer = []
    let infoMap = {}
    
    info.forEach((v, idx) => {
        let temp = v.split(" ")
        let score = Number(temp.pop())
        if(infoMap[temp.join("")]) infoMap[temp.join("")].push(score)
        else infoMap[temp.join("")] = [score]
    })
    for (let key in infoMap) {
        infoMap[key].sort((a, b) => a - b); 
    }
    
    // query = query.map((q) => {
    //     return q.split(/ and | |-/i).filter(v => v)
    // })
    // console.log(query)
    
    query.forEach((q, idx) => {
        let cnt = 0
        let newQ = q.split(" and ")
        let [temp, score] = newQ.pop().split(" ")
        newQ.push(temp)
        newQ = newQ.filter((v) => v !== "-")
        // score = Number(score)
        // let score = newQ.pop()
        let key = Object.keys(infoMap)
        
        key = key.filter((k) => newQ.every((v) => k.includes(v)))
        
        for(let k of key){
            cnt += infoMap[k].length - binSearch(infoMap[k], score)   
        }
        answer.push(cnt)
    })
    
    return answer
}

function binSearch(arr, target){
    let l = 0
    let r = arr.length - 1
    let idx = Math.floor((l + r) / 2)
    while(l <= r){
        if(arr[idx] === target){
            return idx
        } else if(arr[idx] < target){
            l = idx + 1
        }else {
            r = idx - 1
        }
        idx = Math.floor((l + r) / 2)
    }
    return idx + 1
}























// let answer = [];
//     let map = {}
   
//     info.forEach((v) => {
//         let temp = v.split(" ")
//         let score = Number(temp.pop())
//         if(map[temp.join("")]) map[temp.join("")].push(score)
//         else map[temp.join("")] = [score]
//     })
//     for (const key in map) {
//         map[key].sort((a, b) => a - b); 
//     }
//     // console.log(map)

//     query = query.map((q) => {
//         return q.split(/ and | |-/i).filter(v => v)
//     })
//     // console.log(query)
    
//     query.forEach((q) => {
//         let score = q.pop()
//         let key = Object.keys(map);
//         let cnt = 0
        
//         key = key.filter((k) => q.every((v) => k.includes(v)))
//         // console.log(key)
//         key.forEach((k) => {
//             cnt += map[k].length - binSearch(map[k], score)
//             // console.log(binSearch(map[k], score))
//         })
//         answer.push(cnt)
//     })
    
//     return answer;
// }
    
//     function binSearch(arr, target){
//         let l = 0
//         let r = arr.length - 1
//         let mid = Math.floor((l + r) / 2)
//         // target = parseInt(target)
//         while(l <= r){
//             if(arr[mid] === target) return mid
//             else if(arr[mid] < target) l = mid + 1
//             else r = mid - 1
//             mid = Math.floor((l + r) / 2)
//         }
//         return mid + 1
//     }

// const binSearch2 = (arr, target) => {
//     let left = 0;
//     let right = arr.length; 
//     target = Number(target)
//     while(left < right){
//         const mid = Math.floor((left + right) / 2);

//         if(arr[mid] >= target) right = mid;
//         else left = mid + 1;
//     }

//     return left;
// }