function stutter (a) {
    var bob = "";
    for (var c = 0; c < a.length;c++) {
        for (var b = 0; b < 2;b++) {
            bob += a.charAt(c);
        }
    }
    return bob;
}