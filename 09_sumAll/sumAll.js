const sumAll = function(start,end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    let arr = []
    for(let i = start; i<=end; i++) {
        arr.push(i)
    }

    return arr.reduce((total,currentItem) => total + currentItem, 0)
};

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
