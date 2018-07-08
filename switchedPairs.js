function switchPairs(a) {
    var size = a.length;
    if (a.length % 2 == 1) {
        size = a.length - 1;
    }
    for (var i = 0; i < size; i+=2) {
        var temp;
        temp = a[i];
        a[i] = a[i+1];
        a[i + 1] = temp;
    }
    return a;
}