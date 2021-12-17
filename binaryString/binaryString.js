function toBinaryString(number){
    let temp = number,
        result = [];

    if (number == 0) return '0';
    while (temp > 0) {
        result.unshift(temp%2);
        temp = Math.floor(temp/2);
    }
    return result.join("");
}