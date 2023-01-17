// complete the given function

function palindrome(str){
	const len = String.length;
for(let i=0; i<len/2; i++){
    if (string[i] !== string[len-1-i]) {
        return 'false';
    }
}
return 'true';

}
module.exports = palindrome
