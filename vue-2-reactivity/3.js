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

let target = () => {
    total = price * quantity;
}

// 记录/record
dep.depend();
target()



console.log(total)
price = 20
console.log(total)
dep.notify()
console.log(total)