function solution(s) {
    let answer = []
    let temp = s.substring(1, s.length - 1).split("}")
    temp.pop()
    temp = temp.map((v, i) =>  i > 0 ? v.substring(2) : v.substring(1))
    temp = temp.map((v) => v.split(",").map((v) => Number(v)))
    temp.sort((a, b) => a.length - b.length)
    temp.forEach((v) => answer.push(...v))
    
    return [...new Set(answer)]
}














// let answer = [];
//     let tuple = []
//     let temp = ""
//     let temp2 = []
    
//     for(let i = 0; i < s.length; i++){
//         if(i === 0 || i === s.length - 1) continue
//         if(s[i] !== "{" && s[i] !== "}"){
//             temp += s[i]
//         }
//         if(s[i] === "}"){
//             tuple.push(temp.split(",").map((v) => Number(v)))
//             temp = ""
//             i++
//         }
//     }

//     tuple.sort((a, b) => a.length - b.length)
//     tuple.forEach((t) => {
//         answer.push(...t)
//     })
    
//     return [...new Set(answer)];
// }