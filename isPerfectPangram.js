function isPerfectPangram(str) {
    str = str.toLowerCase();
    var set = "abcdefghijklmnopqrstuvwxyz";
    var check = true;
    if (str.length < 26) {
        return false;
    }
    for (var i = 0; i < set.length; i++) {
        var counter = 0;
        for (var j = 0; j < str.length; j++) {
            
            if (str.charAt(j) == set.charAt(i)) {
                counter++;
                if (counter > 1) {
                    check = false;
                    break;
                }
            }
            
        }
    }
    return check;
}