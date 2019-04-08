/**
 
 * @param {Object} object the object to inspect.
 * @param {Function} predicate the function invoked per iteration
 * @returns {String | undefined}

*/ 

// 1.检验参数
// 2.遍历对象，取值检验
// 3.返回结果

function findKey(object, predicate) {
    let result
    if (object == null) {
        return result
    }

    Object.keys(object).some((key) => {
        value = object[key]
        if (predicate(value, key, object)) {
            result = key
            return true
        }   
    })

    return result
}



