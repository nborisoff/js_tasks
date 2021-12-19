function removeZeros(array) {
	for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if ((array[j] === 0 || array[j] === "0") && (array[j+1] !== 0 || array[j+1] !== "0")) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    } 
    len = array.length%2 == 0 ? array.length : array.length - 1;

    for (let i = 0; i < len; i += 2) {
        if (array[i] === 0 || array[i] === "0") {
            [array[i], array[i+1]] = [array[i+1], array[i]];
        }
    }
    return array;
}