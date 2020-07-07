let data = { price: 5, quantity: 2 }
let target, total, salePrice

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



Object.keys(data).forEach(key => {
    let internalValue = data[key] // 保存最初的值
    const dep = new Dep() // 每个属性都有自己的Dep类
    Object.defineProperty(data, key, {
        get() {
            dep.depend() // 获取数据时，将当前的target函数添加到subscribers
            console.log(`获取 ${key}: ${internalValue}`)
            return internalValue
        },
    
        set(newVal) {
            console.log(`设置 ${key} 为：${newVal}`)
            internalValue = newVal
            dep.notify() // 运行所有subscribers中的函数
        }
    })
})


function watcher(myFunc) {
    target = myFunc
    target()
    target = null
}

console.log(`=========`)

watcher(() => {
    console.log(`>>>>watcher total = data.price * data.quantity`)
    total = data.price * data.quantity
})

console.log(`-------------`)

watcher(() => {
    console.log(`>>>>watcher salePrice = data.price * 0.9`)
    salePrice = data.price * 0.9
})


console.log(total)
console.log(salePrice)
console.log(`////////////`)
data.price = 20
console.log(total)