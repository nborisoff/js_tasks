function anagrams(word, words) {
    return words.filter(function(x) {
        return x.split("").sort().join("") === word.split("").sort().join("");
    });
}