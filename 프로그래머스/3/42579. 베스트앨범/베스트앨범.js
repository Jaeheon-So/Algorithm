function solution(genres, plays) {
    let answer = [];
    let cmap = {}
    let rmap = {}
    
    for(let i = 0; i < genres.length; i++){
        cmap[genres[i]] = cmap[genres[i]] + plays[i] || plays[i]
        rmap[genres[i]] = rmap[genres[i]] ? [...rmap[genres[i]], [plays[i], i]] : [[plays[i], i]]
    }
    let arr = Object.entries(cmap).sort((a, b) => b[1] - a[1]).map((v) => v[0])
    
    for(let i = 0; i < arr.length; i++){
        const temp = rmap[arr[i]].sort((a, b) => b[0] - a[0]).map((v) => v[1])
        if(temp.length === 1) answer.push(temp[0])
        else {
            answer.push(temp[0])
            answer.push(temp[1])
        }
    }
    
    return answer
}