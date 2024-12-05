function solution(arr) {
    let answer = 0;
    arr.forEach((item) => {
        answer += item
    })
    answer /= arr.length
    return answer;
}