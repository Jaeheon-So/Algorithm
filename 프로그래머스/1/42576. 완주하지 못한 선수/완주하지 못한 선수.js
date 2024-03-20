function solution(participant, completion) {
    participant.sort()
    completion.sort()
    
    return participant.find((p, idx) => p !== completion[idx])
}