function solution(arr){
    let stack = [];

    for(let i = 0; i < arr.length; i++){
        if(stack.length === 0) {
            stack.push(arr[i])
            continue
        }
        
        if(arr[i] === stack[stack.length - 1]){
            continue
        } else {
            stack.push(arr[i])
        }
    }
    
    return stack;
}