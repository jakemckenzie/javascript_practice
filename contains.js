function contains(a, b) {
    for (var i = 0, j = 0; i < a.length; i++){
        if (a[i] == b[j]){
            if (++j >= b.length){
                return true
            }
        }
    }
    return false;
}