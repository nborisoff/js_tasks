const input = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49

function maxArea(height) {
    let result = 0,
        left = 0,
        right = height.length - 1;

    while (left < right) {
        let current = Math.min(height[left], height[right]) * (right - left);
        result = Math.max(result, current);

        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return result;
}