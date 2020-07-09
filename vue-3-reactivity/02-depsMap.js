const depsMap = new Map()

function track(key) {
  // Make sure this effect is being tracked.
  // 确保追踪当前effect
  let dep = depsMap.get(key)
  if (!dep) {
    // There is no dep (effects) on this key yet
    // 当前key还没有依赖(effects)
    depsMap.set(key, (dep = new Set())) // Create a new Set
    // (dep = new Set()) 返回新创建的Set
  }

  dep.add(effect) // Add effect to dep 添加到依赖集合
}

// 触发执行依赖Set中的函数
function trigger(key) {
  let dep = depsMap.get(key) // Get the dep (effects) associated with this key
  if (dep) {
    // If they exist
    dep.forEach(effect => {
      // run them all
      effect()
    })
  }
}

let product = { price: 5, quantity: 2 }
let total = 0

let effect = () => {
  total = product.price * product.quantity
}

track('quantity')
effect()
console.log(total)

product.quantity = 3
trigger('quantity')
console.log(total)
