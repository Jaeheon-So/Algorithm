function solution(phone_book) {
    phone_book.sort()
    
    for(let i = 0; i < phone_book.length - 1; i++){
        if(!phone_book[i+1].indexOf(phone_book[i]))
            return false
    }
    
    return true
}












// //     let map = phone_book.reduce((res, p) => ({...res, [p]: 1}), {})
    
// //     for(let p of phone_book) {
// //         for(let i = 1; i < p.length; i++) {
// //             if(map[p.substring(0, i)]) return false
// //         }
// //     }
    
//     // return true;
    
//     phone_book.sort();
//     for (let i = 0; i < phone_book.length - 1; i++){
//          if (phone_book[i + 1].indexOf(phone_book[i]) === 0) return false
//     }
//     return true;