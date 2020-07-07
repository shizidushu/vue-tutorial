// 为每个data对象的属性设置getter, setter (Object.defineProperty)
let data = { price: 5, quantity: 2 }

Object.keys(data).forEach(key => {
    console.log(key)
})

console.log(`------`)

Object.keys(data).forEach(key => {
    let internalValue = data[key] // 保存最初的值
    Object.defineProperty(data, key, {
        get() {
            console.log(`获取 ${key}: ${internalValue}`)
            return internalValue
        },
    
        set(newVal) {
            console.log(`设置 ${key} 为：${newVal}`)
            internalValue = newVal
        }
    })
})


total = data.price * data.quantity
data.price = 20