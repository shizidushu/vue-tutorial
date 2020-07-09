let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");


john = null; // 覆盖引用

// john 被从内存中删除了！
