function exponent(bse, exp) {
    var exception = "exponent should be non-negative";
    if (exp == 0) {
        return 1;
    }
    if (exp == 1) {
        return bse;
    }
    if (exp < 0) {
        return exception;
    }
    return exponent(bse,exp - 1) * bse;
}