function solution(input, markers) {
    let result = input.split("\n");
    
    for (let i = 0; i < markers.length; i++) {
        let regExp = new RegExp(`\\${markers[i]}.+`, 'g');
        
        result = result.map(function(x) {
            return x.replace(regExp, '').trim();
        });
    }
    return result.join("\n");
};