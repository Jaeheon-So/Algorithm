function solution(s, skip, index) {
    let answer = '';
    
    // 97 ~ 122
    
    for(let x of s){
        let code = x.charCodeAt()
        for(let i = 0; i < index; i++){
            if(code + 1 === 123) code = 97
            else code += 1
            if(skip.includes(String.fromCharCode(code))) i--
        }
        answer += String.fromCharCode(code)
    }
    
    return answer;
}