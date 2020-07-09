// 在 JavaScript 中，类是一种函数。
class Dep {
    constructor() {
        this.subscribers = []
    }

    // 记录/record
    depend() {
        // 如果target存在且subscribers中不包含它
        // target函数之后在外面定义
        if (target && !this.subscribers.includes(target)) {
            // 添加到subscribers
            this.subscribers.push(target)
        }
    }

    // 重跑/replay
    notify() {
        this.subscribers.forEach( sub => sub() )
    }
}

const dep = new Dep()

let price = 5;
let quantity = 2;
let total = 0;


let target = null;
function watcher(myFunc) {
    target = myFunc
    dep.depend()
    target()
    target = null // 重置
}

// 记录/record
watcher(()=> {
    total = price * quantity
})


console.log(total)
price = 20
console.log(total)
dep.notify()
console.log(total)