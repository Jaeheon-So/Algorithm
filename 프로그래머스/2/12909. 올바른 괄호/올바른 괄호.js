function solution(s){
    let stack = []
    
    if(s[0] === ")" || s[s.length - 1] === "(") return false
    
    for(let x of s){
        if(x === "("){
            stack.push(x)
        } else {
            if(stack.length === 0) return false
            stack.pop()
        }
    }

    if(stack.length !== 0) return false
    
    return true;
}