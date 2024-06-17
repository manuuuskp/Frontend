let map  = new Map();
map.set('key', 'value');
map.get('key');
map.has('key'); //true
map.delete('key');
map.clear();
map.size;
map.entries();
map.keys(); //prints only array of keys
map.values(); //prints only array of values


let set = new Set();
set.add(1);
set.add('1'); //both are different
set.size;
set.clear();
set.delete(1);
set.entries();
set.keys();
set.values()

let weakMap = new WeakMap();

let a = {b:1}
weakMap.set(a, 1);
weakMap.get(a) //1
a = null;
weakMap.get(a) //undefined

// same for weakset as well

let weakset = new WeakSet();

// The main difference is that weakmap and weakset will be garbage collected whereas in normal map and key the objects it in will not be garbage collected.
// the downside is that we will not have methods like keys(), values(), entries(), size