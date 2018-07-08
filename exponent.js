function exponent(bse, exp) {
    if (exp == 0) {
        return 1;
    }
    if (exp == 1) {
        return bse;
    }
    if (exp < 0) {
        throw "exponent should be non-negative";
    }
    return exponent(bse,exp - 1) * bse;
}