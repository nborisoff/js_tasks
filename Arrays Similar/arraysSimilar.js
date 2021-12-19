function arraysSimilar(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    if (JSON.stringify(arr1.sort()) == JSON.stringify(arr2.sort())) return true;
    return false;
}