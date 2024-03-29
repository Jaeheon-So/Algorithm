function solution(park, routes) {
    // park = park.map((p) => p.split(""))

    for(let i = 0; i < park.length; i++){
        for(let j = 0; j < park[i].length; j++){
            if(park[i][j] === "S") return walk([i, j])
        }
    }
    
    function walk(start) {
        let [x, y] = start
        
        routes.forEach((r) => {
            let [dir, num] = r.split(" ")
            let [nx, ny] = [x, y]
            
            if(dir === "E") ny += Number(num)
            else if(dir === "S") nx += Number(num)
            else if(dir === "W") ny -= Number(num)
            else if(dir === "N") nx -= Number(num)

            if(check(x, y, nx, ny)){
                x = nx
                y = ny
            }
        })
        
        return [x, y]
    }
    
    function check(x, y, nx, ny) {
        if(nx < 0 || nx >= park.length || ny < 0 || ny >= park[0].length)
            return false
        
        for(let i = Math.min(x, nx); i <= Math.max(x, nx); i++){
            for(let j = Math.min(y, ny); j <= Math.max(y, ny); j++){
                if(park[i][j] === "X") return false
            }
        }
        
        return true
    }
}