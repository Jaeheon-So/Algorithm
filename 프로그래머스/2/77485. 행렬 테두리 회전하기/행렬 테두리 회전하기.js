function solution(rows, columns, queries) {
    let answer = []
    let arr = Array.from({length: rows}, () => Array(columns).fill(0))
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++){
            arr[i][j] = (j + 1) + i*columns
        }
    }
    
    queries.forEach((query) => {
        let [x1, y1, x2, y2] = query.map((q) => q - 1)
        let temp = arr[x1][y1]
        let min = temp
        
        for(let i = x1; i < x2; i++){
            min = Math.min(min, arr[i + 1][y1])
            arr[i][y1] = arr[i + 1][y1]
        }
        for(let j = y1; j < y2; j++){
            min = Math.min(min, arr[x2][j + 1])
            arr[x2][j] = arr[x2][j + 1]
        }
        for(let i = x2; i > x1; i--){
            min = Math.min(min, arr[i - 1][y2])
            arr[i][y2] = arr[i - 1][y2]
        }
        for(let j = y2; j > y1; j--){
            min = Math.min(min, arr[x1][j - 1])
            arr[x1][j] = arr[x1][j - 1]
        }
        arr[x1][y1 + 1] = temp
        answer.push(min)
    })
    
    return answer
}




































//  let answer = [];
//     let graph = Array.from({length: rows}, () => Array(columns))
//     graph = graph.map((v, idx) => {
//         let temp = []
//         for(let i = columns*idx + 1; i < columns*idx+columns+1; i++) temp.push(i)
//         return temp
//     })
//     // console.log(graph)
    
//     for(let q of queries){
//         let [r1, c1, r2, c2] = q
//         r1 = r1 - 1
//         c1 = c1 - 1
//         r2 = r2 - 1
//         c2 = c2 - 1
        
//         let temp = []
//         let first = graph[r1][c1]
//         for(let i = r1; i < r2; i++){
//             temp.push(graph[i][c1])
//             graph[i][c1] = graph[i+1][c1]
//         }
//         for(let i = c1; i < c2; i++){
//             temp.push(graph[r2][i])
//             graph[r2][i] = graph[r2][i+1]
//         }
//         for(let i = r2; i > r1; i--){
//             temp.push(graph[i][c2])
//             graph[i][c2] = graph[i-1][c2]
//         }
//         for(let i = c2; i > c1; i--){
//             temp.push(graph[r1][i])
//             graph[r1][i] = graph[r1][i-1]
//         }
//         graph[r1][c1+1] = first
//         answer.push(Math.min(...temp))
//     }
    
//     return answer;
