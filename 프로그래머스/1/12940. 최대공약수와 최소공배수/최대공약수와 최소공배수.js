function solution(n, m) {
    let answer = [];
    
    for(let i = Math.min(n, m); i > 0; i--){
        if(n % i === 0 && m % i === 0){
            answer.push(i)
            answer.push((n * m) / i)
            break
        }
    }
    
    return answer;
}