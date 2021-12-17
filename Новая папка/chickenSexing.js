function correctness(bobsDecisions, expertDecisions) {
    let score = 0;
    bobsDecisions.map(function (x, y) {
        if (expertDecisions[y] == x) {
            score += 1;
        } else if (expertDecisions[y] != x && (x == "?" || expertDecisions[y] == "?")) {
            score += 0.5;
        }
    })
    return score;
}