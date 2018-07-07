function isPangram(str) {
    str = str.toLowerCase();
    var check = true;
    if (str.length < 26) {
        return false;
    }
    for (var i = 'a'; i <= 'z'; i++) {
        if (str.indexOf(i) == -1) {
               check = false;
        }
    }
    return check;
}