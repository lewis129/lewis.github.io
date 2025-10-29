const input = document.getElementById("input")

/**
 * Reverses the given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
function reverseString(str){
   return str.split("").reverse().join("")
}
function check(){
    const value = input.value;
    const reverse = reverseString(value)
  

    if(value === reverse){
        alert("P A L I N D R O M E")
    } else{
        alert('not today!' )
    }
    input.value = ''
}
