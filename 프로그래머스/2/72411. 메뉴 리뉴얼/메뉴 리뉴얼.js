function solution(orders, course) {
    let answer = [];
    let cnt = {}
    // 각 문자열로 별로 가능한 조합 course별로 싹 다 구하고 2개 이상 있으면 정답에 추가
    // 조합 구하는 함수가 결국 중요
    // dfs로는 안될까??
    
    for(let c of course){
        for(let order of orders){
            let res = []
            let visited = Array(order.length).fill(0)
            dfs("", order, res, visited, 0, c)
            res = res.map((r) => r.split("").sort().join(""))
            console.log(res)
            res.forEach((r) => {
                cnt[r] = (cnt[r] || 0) + 1
            })
        }
        let max = Math.max(...Object.values(cnt))
        for(let key in cnt){
            if(cnt[key] >= 2 && cnt[key] === max) answer.push(key)
        }
        cnt = {}
    }
    
    return answer.sort();
}

function dfs(str, target, res, visited, start, n){
    if(str.length === n){
        res.push(str)
        return
    }
    for(let i = start; i < target.length; i++){
        if(visited[i]) continue
        visited[i] = 1
        dfs(str + target[i], target, res, visited, i + 1, n)
        visited[i] = 0
    }
}




//    function getCombinations(arr, selectNumber) {
//        if(selectNumber === 1) return arr.map((el) => [el])
       
//        const result = []
//        arr.forEach((fixed, idx, origin) => {
//            const rest = origin.slice(idx + 1)
//            const combinations = getCombinations(rest, selectNumber - 1)
//            const attached = combinations.map((el) => [fixed, ...el])
//            result.push(...attached)
//        })
       
//        return result
//    }