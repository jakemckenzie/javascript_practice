function contains(set1,set2) {
     for (var i = 0; i < set1.length - set2.length; i++)
         if (!matches(set1, i, set2)){
             return false;
         }
     return true;
}

function matches(int[] set1, int off, int[] set2) {
     for (int j = 0; j < set2.length; j++) {
         if (set1[off + j] != set2[j]) {
             return false;
         }
     }
     return true;
}