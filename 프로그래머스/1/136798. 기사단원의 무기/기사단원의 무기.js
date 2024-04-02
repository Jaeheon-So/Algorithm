 function countDivisor(n) {
    let cnt = 0
    for(let i = 1; i * i <= n; i++){
        if(i * i === n) cnt++
        else if(n % i === 0) cnt += 2
    }
    return cnt
}

function solution(number, limit, power) {
    let answer = 0;
    
    for(let i = 1; i <= number; i++){
        let newPower = countDivisor(i)
        newPower > limit ? answer += power : answer += newPower
    }
    
    return answer;
}