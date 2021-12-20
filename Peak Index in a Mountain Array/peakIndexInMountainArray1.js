let peakIndexInMountainArray = function(arr) {
    let start = 0,
        end = arr.length - 1;

    while (start < end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
};