function test(fo, ...last) {
    console.log(fo, ...last)
    console.log(last.length)
}

test({a: '1'}, {b: '2'}, {c: '3'})