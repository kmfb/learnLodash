const slice = require('./slice.js')
/*

    @param {Array}  array
    @size {Number}  [size=1]

*/

//1.校验参数
//2.算出新数组的length（根据length / size）
//3.初始化新旧数组index
//4.循环里将旧数组切片（根据index， index + size）,并放入新数组
//5.return 新数组


const chunk = (array, size) => {
    size = Math.max(size, 0)
    const length = array ? array.length : 0
    if (!length) {
        return []
    }
    if (!size) {
        size = 1
    }

    resLength = Math.ceil(length / size)

    let index = 0
    let resIndex = 0
    const result = new Array(resLength)
    while (index < length) {
        result[resIndex++] = slice(array, index, index += size)
    }

    return result
}

const arr = [1, 3, 4, 5, 9]

console.log(chunk(arr, 3))

