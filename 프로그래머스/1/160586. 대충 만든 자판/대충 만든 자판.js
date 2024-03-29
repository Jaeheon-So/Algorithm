function solution(keymap, targets) {
    let answer = [];
    
    for(let target of targets){
        let cnt = 0
        
        for(let t of target){
            let minIndex = 101
            let flag = true
            
            for(let key of keymap){
                let index = key.indexOf(t)
                if(index !== -1){
                    minIndex = Math.min(index, minIndex)
                    flag = false
                }
            }
            if(flag) {
                cnt = -1
                break
            }
            cnt += minIndex + 1
        }
        answer.push(cnt)
    }
    
    return answer;
}