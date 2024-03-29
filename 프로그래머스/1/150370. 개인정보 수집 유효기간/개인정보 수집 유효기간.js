function solution(today, terms, privacies) {
    let answer = [];
    let map = {}
    
    terms.forEach((t) => {
        let temp = t.split(" ")
        map[temp[0]] = Number(temp[1])
    })
    
    privacies.forEach((p, idx) => {
        let [date, t] = p.split(" ")
        let[y, m, d] = date.split(".").map((v) => Number(v))
        
        let newY = m + map[t] > 12 ? y + Math.floor((m + map[t]) / 12) : y
        let newD =  (d - 1 === 0 ? 28 : d - 1).toString().padStart(2, "0")
        let newM = (m + map[t] > 12 ? m + map[t] - (12*Math.floor((m + map[t]) / 12)): m + map[t]) + (d - 1 === 0 ? -1 : 0)
        if(newM === 0) {
            newM = "12"
            newY -= 1
        }
        else {
            newM = newM.toString().padStart(2, "0")
        }
        
        if(Number(today.split(".").join("")) > Number(newY + newM + newD)) 
            answer.push(idx + 1)
    })
    
    return answer;
}