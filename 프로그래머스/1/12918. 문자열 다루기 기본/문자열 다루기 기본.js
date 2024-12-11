function solution(s) {
    if(s.length !== 4 && s.length !== 6) {
        return false
    }
    
    let a = s.split("").map((i) => Number(i)).includes(NaN)
    return !a
}