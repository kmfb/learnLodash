function copyArray(source) {
    let len = source.length
    const result = new Array(len)
    for (let i = 0; i < len; i++) {
        result[i] = source[i]
    }
    return result
}

module.exports = copyArray