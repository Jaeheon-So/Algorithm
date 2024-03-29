function solution(players, callings) {
    let pmap = {} 
    let cmap = {}
    
    players.forEach((p, idx) => {
        pmap[p] = idx
    })
    
    callings.forEach((c) => {
        let idx = pmap[c]
        let front = players[idx - 1]
        
        players[idx - 1] = players[idx]
        players[idx] = front
        
        pmap[c] = pmap[c] - 1
        pmap[front] = pmap[front] + 1
    })
 
    return players
}