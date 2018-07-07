function vowelCount(str) {
    str = str.toLowerCase();
    var a = 0, e = 0, i = 0, o = 0, u = 0;
    for (var z = 0; z < str.length; z++) {
        if (str.charAt(z) == 'a') {
            a++;
        }
        if (str.charAt(z) == 'e') {
            e++;
        }
        if (str.charAt(z) == 'i') {
            i++;
        }
        if (str.charAt(z) == 'o') {
            o++;
        }
        if (str.charAt(z) == 'u') {
            u++;
        }
    }
    return (a + e + i + o + u);
}