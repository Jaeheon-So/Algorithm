function solution(k, score) {
    let answer = [];
    let hall = []
    
    for(let i = 0; i < score.length; i++){
        hall.push(score[i])  
        hall.sort((a, b) => a - b)
        if(i >= k) hall.shift()
        answer.push(hall[0])
    }

    return answer;
}