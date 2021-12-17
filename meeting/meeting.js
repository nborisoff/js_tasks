function meeting(s) {
    let result = s.split(";").map(function (elem) {
        let temp = elem.toUpperCase().split(":");
        [temp[0], temp[1]] = [temp[1], temp[0]];
        temp = temp.join(", ");
        return temp = `(${temp})`;
    })
    return result.sort().join("");
}