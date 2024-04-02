function solution(s) {
    let answer = 0;
    
    while(s.length > 0){
        let first = s[0]
        let same = 1
        let diff = 0
        let flag = true
        
        for(let i = 1; i < s.length; i++){
            if(s[i] === first) same++
            else diff++
            
            if(same === diff){
                s = s.substring(i + 1)
                answer++
                flag = false
                break
            }
        }
        if(flag) {
            answer++
            break
        }
    }
    
    return answer;
}