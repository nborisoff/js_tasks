function comparePowers(n1,n2){
    let x = Math.log10(n1[0])*n1[1],
        y = Math.log10(n2[0])*n2[1];

    return x == y ? 0 : x > y ? -1 : 1;
}