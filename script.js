// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	var reversed = str.split('').reverse().join('');
  if (reversed === str) return true;

	return false;

}
module.exports = palindrome
