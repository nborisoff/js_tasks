function sumPairs(ints, s) {
    let temp = {}
    
    for (let i = 0; i < ints.length; ++i) {
        if (Object.keys(temp).indexOf(`${s - ints[i]}`) != -1) {
            return [s - ints[i], ints[i]];
        } else {
            temp[ints[i]] = 1;
        }
    }
}