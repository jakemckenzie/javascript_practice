function longestWord(a){
    var index = 0;
    for(var i = a.length - 1; i >= 0; i--) {
        index = (a[i].length >a[index].length) ? i : index;
    }
    return a[index];
}