const random = require('./random.js')
const copyArray = require('./copyArray.js')
// 1.复制数组
// 2.遍历copy数组，每次取(index, lastIndex)的随机索引
// 3.将随机索引和当前索引的值位置交换


function shuffle(array) {
    const len = array ? array.length : 0
    if (!len) {
        return []
    }

    const result = copyArray(array)
    let lastIndex = len - 1
    let index = -1
    while(++index < len) {
        let rand = random(index, lastIndex)
        let value = result[rand]
        result[rand] = result[index]
        result[index] = value
    }

    return result

}

