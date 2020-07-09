let user = {
    name: "John",
  };
  
user = new Proxy(user, {
get(target, prop, receiver) {
    console.log('GET')
    // receiver 保留了对正确 this 的引用
    return Reflect.get(target, prop, receiver);
},
set(target, prop, val, receiver) {
    console.log('SET')
    // 写入成功，返回true，否则返回false
    return Reflect.set(target, prop, val, receiver);
}
});

let name = user.name;
user.name = "Pete";