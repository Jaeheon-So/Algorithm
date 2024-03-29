function solution(name, yearning, photo) {
    let answer = [];
    let map = {}
    
    for(let i = 0; i < name.length; i++){
        map[name[i]] = yearning[i]
    }
    
    photo.forEach((arr) => {
        let sum = 0
        arr.forEach((n) => {
            sum += map[n] || 0
        })
        answer.push(sum)
    })
    
    return answer;
}