/* 
    @param {Array} array
    @param {Number} [start=0]
    @param {Number} [end=array.length] 
    @returns {Array} 
*/

// 1. 检验输入参数
// 2. 转换start和end
// 3. 获取输出数组的length
// 4. 新建数组，并将切边数组的元素放入
// 5. 返回切片数组

const slice = (array, start, end) => {
    let length = array.length ? array.length : 0
    if (!length) {
        return []
    }

    start = start ? start : 0
    end = end ? end : length

    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end
    if (end < 0) {
        end = -end > length ? length : (length + end)
    }

    length = start > end ? 0 : (end - start)

    const result = new Array(length)
    let index = -1

    while (++index < length) {
        result[index] = array[index + start]
    }

    return result

}


module.exports = slice