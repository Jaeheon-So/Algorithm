function solution(clothes) {
    let answer = 1
    const map = {}
    
    clothes.forEach((c) => 
        map[c[1]] = map[c[1]] + 1 || 1)
    
    for(let key in map){
        answer *= map[key] + 1
    }
    
    return answer - 1
    
}


















//  let answer = 1
//     let count = {}
    
//     clothes.forEach((c) => {
//         count[c[1]] = count[c[1]] + 1 || 1
//     })
    
//     for(let key in count){
//         answer *= count[key] + 1
//     }
    
//     return answer - 1















// var answer = 0;
//     let cType = new Set()
//     let temp = []
//     for(let i = 0; i < clothes.length; i++){
//         cType.add(clothes[i][1])
//     }
//     cType.forEach((v) => {
//         let cnt = 0
//         clothes.forEach((cloth) => {
//             if (cloth[1] === v){
//                 cnt++
//             } 
//         })
//         temp.push(cnt)
//     })
//     console.log(temp)
//     for(let i = 1 ; i <= temp.length; i++){
//         answer += getCombinations(temp, i).map((item) => {
//             return item.reduce((a, b) => a*b)
//             }).reduce((a, b) => a+b)
//     }
//     // answer = temp.map((el) => el+1).reduce((a, b) => a*b) - 1
//     return answer;
//     // return Object.values(clothes.reduce((obj, t)=> {
//     //     obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
//     //     return obj;
//     // } , {})).reduce((a,b)=> a*(b+1), 1)-1; 
// }

// function getCombinations(arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((el) => [el]); 
//     // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

//     arr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1); 
//       // 해당하는 fixed를 제외한 나머지 뒤
        
//       const combinations = getCombinations(rest, selectNumber - 1);
//       // 나머지에 대해서 조합을 구한다.
      
//       const attached = combinations.map((el) => [fixed, ...el]);
//       //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      
//       results.push(...attached); 
//       // 배열 spread syntax 로 모두다 push
//     });
//     return results; 