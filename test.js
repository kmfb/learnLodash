function baseEach(collection, iteratee) {
    if (collection == null) {
      return collection
    }
    if (!isArrayLike(collection)) {
      return baseForOwn(collection, iteratee)
    }
    const length = collection.length
    const iterable = Object(collection)
    let index = -1
  
    while (++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break
      }
    }
    return collection
}

console.log(typeof Object('123'))