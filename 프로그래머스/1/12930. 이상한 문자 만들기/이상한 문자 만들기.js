function solution(s) {
    let answer = '';
    
    s.split(" ").forEach((l) => {
        for(let i = 0; i < l.length; i++){
            if(i % 2 === 0) answer += l[i].toUpperCase()
            else answer += l[i].toLowerCase()
        }
        answer += " "
    })
    
    return answer.substring(0, s.length);
}