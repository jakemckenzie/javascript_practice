function starString(star) {
    return (star <= 0) ? "*" : starString(star - 1) + starString(star - 1);
}