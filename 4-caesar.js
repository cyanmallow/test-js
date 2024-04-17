function ceasarCipher(orgString, key){
    const newString = [];
    for (let i=0; i<orgString.length-key; i++){
        newString.push(orgString[i+key]);
    }
    for (let i=orgString.length-key; i<orgString.length; i++){
        newString.push(orgString[i-orgString.length+key]);
    }
    return newString.join('');
}

console.log(ceasarCipher("abcdefgh", 2));