// export function test(x: any): x is number {
//     return typeof x === 'number'

// }
export function test(x: any): x is number {
    return typeof x === 'number'

}
console.log(test(1))
