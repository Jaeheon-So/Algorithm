function solution(n, m, section) {
    let answer = 0;
    let wall = Array(n+1).fill(1)
    
    for(let x of section) wall[x] = 0
    
    for(let i = 1; i < wall.length; i++){
        if(!wall[i]){
            for(let j = i; j < i + m; j++){
                wall[j] = 1
            }
            answer++
        }
    }
    
    return answer;
}