// complete the given function

function palindrome(str){
	var reversed = str.split('').reverse().join('');
  if (reversed === str) return true;

	return false;

}
module.exports = palindrome
