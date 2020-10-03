exports.min = function min(array) {
    if (!array || array.length === 0) return 0;
    return Math.min.call(null, ...array);
};

exports.max = function max(array) {
    if (!array || array.length === 0) return 0;
    return Math.max.call(null, ...array);
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((acc, elem) => (acc += element)) / 2;
};
