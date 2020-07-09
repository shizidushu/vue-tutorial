// 当quantity或price更新时，需要重新计算total。
// 那么，我们应该怎么保存计算total的逻辑？
// - 将代码let total = price * quantity保存下来
// - 之后，再次运行已保存的代码

let price = 5
let quantity = 2
let total = 0
let target = null
let storage = []

target = () => { total = price * quantity }

function record() { storage.push(target) }
function replay() { storage.forEach( run => run() )}

record()
target()

console.log(total)
price = 20
console.log(total)
replay()
console.log(total)