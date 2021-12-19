function isValid(s) {
    let brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
        },
        temp = [];

    for (let i = 0; i < s.length; i++) {
        if (isClosedBracket(s[i])) {
            if (brackets[s[i]] !== temp.pop()) return false;
        } else {
            temp.push(s[i]);
        }
    }
    return temp.length === 0;
}

function isClosedBracket(check) {
    return [")", "]", "}"].indexOf(check) > -1;
}