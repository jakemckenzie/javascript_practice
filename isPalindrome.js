function isPalindrome(str) {
    return str.toLowerCase().replace(re, '') ==  str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
}