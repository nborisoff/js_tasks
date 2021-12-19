function isValidWalk(walk) {
    let path = 0;

    if (walk.length < 10 || walk.length > 10) {
        return false;
    } else {
        for (let i = 0; i < walk.length; i++) {
            switch (walk[i]) {
                case "n":
                    path += 1;
                    break;
                case "s":
                    path -= 1;
                    break;
                case "w":
                    path += 2;
                    break;
                case "e":
                    path -= 2;
                    break;   
                }
        }
        
        if (path == 0) {
            return true;
        } else {
            return false;
        }
    }
}