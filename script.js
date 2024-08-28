var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
var encoded = document.getElementById("encoded");
var decoded = document.getElementById("decoded");

encoded.addEventListener("input", atbashDecode)

function atbashDecode() {
    var text = encoded.value;
    var newText = "";
    for (let i = 0; i < text.length; i++) {
        if (alphabet.includes(text[i].toUpperCase())) {
            if (text[i].toUpperCase() == text[i]) {
                newText += alphabet[alphabet.length - alphabet.indexOf(text[i].toUpperCase()) - 1];
            } else {
                newText += alphabet[alphabet.length - alphabet.indexOf(text[i].toUpperCase()) - 1].toLowerCase();
            }
        } else {
            newText += text[i];
        }
    }
    decoded.innerHTML = newText;
}

function morseDecode() {
    var text = encoded.value;
    var newText = "";
    var letters = [];
    letters = text.split(" ");
    for (let i = 0; i < letters.length; i++) {
        if (letters[i])
        newText += alphabet[morse.indexOf(letters[i])]
    }
    if (newText.indexOf("undefined") == -1) {
        decoded.innerHTML = newText;
    } else {
        decoded.innerHTML = "ERROR";
    }
}