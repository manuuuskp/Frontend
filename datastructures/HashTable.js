class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i=0; i<key.length; i++) {
            hash = (hash + key.codePointAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        const hash = this._hash(key);
        if(!this.dataMap[hash]) {
            this.dataMap[hash] = [];
        }
        this.dataMap[hash].push([key, value]);
        return this;
    }

    get(key) {
        const hash = this._hash(key);
        const dataArr = this.dataMap[hash];
        for(let i=0; i<dataArr.length; i++) {
            if(dataArr[i][0] === key) {
                return dataArr[i][1];
            }
        }
        return null;
    }
}