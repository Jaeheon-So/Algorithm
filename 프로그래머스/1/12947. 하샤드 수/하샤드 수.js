function solution(x) {
    let sum = x.toString().split("").reduce((sum, cur) => eval(sum) + eval(cur))
    return x % sum === 0 ? true : false;
}