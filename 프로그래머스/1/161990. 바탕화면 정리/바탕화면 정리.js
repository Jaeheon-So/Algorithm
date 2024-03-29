function solution(wallpaper) {
    let graph = wallpaper.map((w) => w.split(""))
    let l = 0
    let r = 0
    let u = 0
    let d = 0
    
    for(let i = 0; i < graph.length; i++){
        let flag = true
        for(let j = 0; j < graph[i].length; j++){
            if(graph[i][j] === "#"){
                u = i
                flag = false
                break;
            }
        }
        if(!flag) break;
    }
    
    for(let i = graph.length - 1; i >= 0; i--){
        let flag = true
        for(let j = graph[i].length - 1; j >= 0; j--){
            if(graph[i][j] === "#"){
                d = i
                flag = false
                break;
            }
        }
        if(!flag) break
    }
    
    for(let i = 0; i < graph[0].length; i++){
        let flag = true
        for(let j = 0; j < graph.length; j++){
            if(graph[j][i] === "#"){
                l = i
                flag = false
                break;
            }
        }
        if(!flag) break;
    }
    
    for(let i = graph[0].length - 1; i >= 0; i--){
        let flag = true
        for(let j = graph.length - 1; j >= 0; j--){
            if(graph[j][i] === "#"){
                r = i
                flag = false
                break;
            }
        }
        if(!flag) break
    }
    
    return [u, l, d + 1, r + 1];
}