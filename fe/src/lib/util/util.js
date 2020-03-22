const setItem = (key, value, expire) => {
    let obj = {
        data: value,
        time: Date.now(),
        expire: expire
    };
    //localStorage 设置的值不能为对象,转为json字符串
    localStorage.setItem(key, JSON.stringify(obj));
}

const getItem = key => {
    let val = localStorage.getItem(key);
    if (!val) {
        return val;
    }
    val = JSON.parse(val);
    console.log(Date.now() - val.time)
    if (Date.now() - val.time > val.expire) {
        localStorage.removeItem(key);
        return null;
    }
    return val.data;
}

const removeItem = key => {
    localStorage.removeItem(key);
}

export {
    setItem,
    getItem,
    removeItem
}