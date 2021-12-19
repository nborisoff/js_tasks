function christmasTree(height) {
    let result = [];
    
    for (let i = 0; i < height; i++) {
        result.push(" ".repeat(height - i - 1) + "*".repeat(2*i + 1) + " ".repeat(height - i - 1));
    }
    return result.join("\n");
}