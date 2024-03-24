let answer = new Set()

function solution(N, road, K) {
    let graph = {}
    let visited = Array(N + 1).fill(0)
    for(let i = 1; i <= N; i++){
        graph[i] = []
    }
    road.forEach((r) => {
        let [x, y, t] = r
        let temp = graph[x].map((v) => v[0])
        graph[x] = [...graph[x], [y, t]]
        graph[y] = [...graph[y], [x, t]]
    })
    visited[1] = 1
    dfs(graph, visited, 1, K)
    
    return answer.size
}

function dfs(graph, visited, x, k){
    answer.add(x)
    for(let i = 0; i < graph[x].length; i++){
        let [nx, t] = graph[x][i]
        if(!visited[nx] && k - t >= 0){
            visited[nx] = 1
            dfs(graph, visited, nx, k - t)
            visited[nx] = 0
        }
    }
}