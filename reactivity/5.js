// 每个变量拥有自己的Dep示例
// 变量更新时，重跑所有需要运行的函数


// 对于每个watcher，我们需要知道用到了哪些变量，以便调用对应的实例
// 我们需要知道变量是什么时候更新/设置的，以便触发对应实例dep.notify()
// 如此，不再需要手动调用dep.notify()


// Object.defineProperty()
// 允许我们对一个属性定义getter和setter函数


let data = { price: 5, quantity: 2 }

Object.defineProperty(data, "price", {
    get() {
        console.log(`我被访问了`)
    },

    set(newVal) {
        console.log(`我被设置了`)
    }
})

data.price // 调用get()
console.log(`----`)
data.price = 20 // 调用set(20)

console.log(data.price)
// 以上方法没有真的获取或设置值，因为我们改写了get和set