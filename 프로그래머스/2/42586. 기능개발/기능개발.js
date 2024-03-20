function solution(progresses, speeds) {
    let answer = [];
    let arr = progresses.map((p, idx) => Math.ceil((100 - p) / speeds[idx]));
    let stack = [arr[0]]
    
    for(let i = 1; i < arr.length; i++) {
        if(stack[0] < arr[i]) {
            answer.push(stack.length)
            stack = []
        }
        stack.push(arr[i])
    }
    if(stack.length !== 0) answer.push(stack.length)
    
    return answer
}