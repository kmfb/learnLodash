//1. 已知Math.random()的值是随机在[0, 1)的小数
//2. 目前求random区间在[x, y]的整数
//[0,7)
//[2,9)


function random(lower, upper) {
    return lower + Math.floor(Math.random() * (upper - lower + 1))
}

module.exports = random