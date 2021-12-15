function comp(array1, array2){
    if (array1 == null || array2 == null) {
        return false;
    } else if ((array1.map(function(elem){return elem*elem;})).sort().join() == array2.sort().join()) {
        return true;
    } else {
        return false;
    }
}