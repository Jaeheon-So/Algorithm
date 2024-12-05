function solution(s){
    let pcnt = 0
    let ycnt = 0
    
    for(let l of s){
        const lowerCase = l.toLowerCase()
        if(lowerCase === "p"){
            pcnt++
        } else if(lowerCase === "y"){
            ycnt++
        }
    }
    
    return pcnt === ycnt ? true : false;
}