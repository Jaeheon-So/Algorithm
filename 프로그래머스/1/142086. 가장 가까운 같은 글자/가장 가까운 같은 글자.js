function solution(s) {
    let answer = [];
    let map = {}
    
    for(let i = 0; i < s.length; i++){
        if(!map[s[i]] && map[s[i]] !== 0) answer.push(-1)
        else answer.push(i - map[s[i]])
        map[s[i]] = i
    }
      
    return answer;
}