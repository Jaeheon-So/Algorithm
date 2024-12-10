function solution(n) {
    let answer = '';
    for(let i = 0; i < Math.ceil((n/2)); i++){
        answer += "수박"
    }
    if(n % 2 === 1){
        answer = answer.slice(0, -1)
    }
    return answer;
}