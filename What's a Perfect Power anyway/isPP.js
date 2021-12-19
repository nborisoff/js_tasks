function isPP (n) {
    for (let i = 2; i < n; i++) {
        let root = Math.round(Math.pow(n, 1/i));

        if (Math.pow(root, i) == n) {
            return [root, i];
        }
    }
    return null;
}