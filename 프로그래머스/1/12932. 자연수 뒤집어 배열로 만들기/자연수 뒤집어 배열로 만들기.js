function solution(n) {
    let answer = [];
    answer = n.toString().split("").reverse().map((a) => Number(a))
    return answer;
}