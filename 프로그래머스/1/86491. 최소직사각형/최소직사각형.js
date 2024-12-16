function solution(sizes) {
    let answer = 0;
    sizes = sizes.map((s) => s[0] < s[1] ? [s[1], s[0]]: s)
    let w = sizes.map((s) => s[0])
    let h = sizes.map((s) => s[1])
    
    return Math.max(...w) * Math.max(...h)
}