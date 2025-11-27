const palindromes = function (str) {
    const removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    const reverse = removeChar.split('').reverse().join('')

    return reverse === removeChar
};

// Do not edit below this line
module.exports = palindromes;
