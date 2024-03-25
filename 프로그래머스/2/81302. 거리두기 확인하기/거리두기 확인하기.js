function solution(places) {
    let answer = []
    
    for(let place of places){
        if(isPossible(place))
            answer.push(1)
        else
            answer.push(0)
    }

    return answer
}

function bfs(X, Y, graph) {
    let q = []
    let visited = Array.from({length: 5}, () => Array(5).fill(0))
    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    
    q.push([X, Y, 0])
    visited[X][Y] = 1
    
    while(q.length){
        let [x, y, d] = q.shift()
        for(let i = 0; i < 4; i++){
            let nx = x + dx[i]
            let ny = y + dy[i]
            
            if(0 <= nx && nx < 5 && 0 <= ny && ny < 5 && graph[nx][ny] != "X" && !visited[nx][ny]){
                if(graph[nx][ny] === "P"){
                    if(d + 1 <= 2) return false
                } else {
                    q.push([nx, ny, d + 1])
                    visited[nx][ny] = 1
                }  
            }
        }
    }
    return true
}

function isPossible(place) {
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(place[i][j] === "P") {
                if(!bfs(i, j, place)) {
                    return false
                }
            }
        }
    }
    return true
}

















//  let answer = [];
//     let cnt = 0
//     let graph = []
//     let visited = []
//     let flag = true
    
//     for(let i = 0; i < places.length; i++) 
//         places[i] = places[i].map((p) => p.split(""))
//     // console.log(places)
    
//     for(let place of places){
//         flag = true
//         for(let i = 0; i < place.length; i++){
//             for(let j = 0; j < 5; j++){
//                 if(place[i][j] === "P"){
//                     visited = Array.from({length: 5}, () => Array(5).fill(0))
//                     graph = Array.from({length: 5}, () => Array(5).fill(0))
//                     bfs(place, i, j)
//                     if(!flag) break
//                     // console.log(place, graph)
//                 }
//             }
//             if(!flag) break
//         }
//         if(flag) answer.push(1)
//         else answer.push(0)
//     }
    
//     return answer;
    
//     function bfs(place, i, j){
//         let q = []
//         let dx = [0, 1, 0, -1]
//         let dy = [1, 0, -1, 0]
//         q.push([i, j])
//         visited[i][j] = 1
//         while(q.length){
//             let [x, y] = q.shift()
//             for(let k = 0; k < 4; k++){
//                 let nx = x + dx[k]
//                 let ny = y + dy[k]
//                 if(0 <= nx && nx < 5 && 0 <= ny && ny < 5 && !visited[nx][ny]){
//                     if(place[nx][ny] !== 'X'){
//                         graph[nx][ny] = graph[x][y] + 1
//                         q.push([nx, ny])
//                         visited[nx][ny] = 1
//                         if(place[nx][ny] === 'P'){
//                             if(graph[nx][ny] <= 2){
//                                 flag = false
//                                 return
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
