function arrayDiff(a, b) {
    return a.filter(function(x) {
        return b.includes(x) == false;
    });
}