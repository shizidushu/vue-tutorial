let data = { price: 5, quantity: 2 }
let internalValue = data.price // 保存最初的值

Object.defineProperty(data, "price", {
    get() {
        console.log(`获取值: ${internalValue}`)
        return internalValue
    },

    set(newVal) {
        console.log(`设置值为：${newVal}`)
        internalValue = newVal
    }
})

data.price // 调用get()
console.log(`----`)
data.price = 20 // 调用set(20)