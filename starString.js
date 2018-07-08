function starString(int n) {
    if (n <= 0)
      return "*";
    else {
      String s = starString(n - 1);
      return s + s;
    }
  }