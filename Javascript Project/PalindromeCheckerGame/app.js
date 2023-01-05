function palindrome_check() {
    var inputText = document.getElementById('input').value;
    var smallstring = inputText.toLowerCase();
    var reverse = smallstring.split("").reverse().join("");

    if (reverse === smallstring) {
        document.getElementById('prog').innerHTML = "It is a palindrome."
    
    } 
    else {
        document.getElementById('prog').innerHTML ="It is not a palindrome."
    }

}