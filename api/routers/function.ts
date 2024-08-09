export const vigenereCipher = (phrase: string, key: string, encrypt: boolean) => {
    let keyArray: number[] = key.split('').map(c => findOffset(c));
    let letters: number[] = [];

    let c = 0;
    for (let i = 0; i < phrase.length; i++) {
        let charCode: number = phrase[i].charCodeAt(0);
        if (((97 <= charCode) && (charCode <= 122)) || ((65 <= charCode) && (charCode <= 90))) {
            letters.push(letterShift(phrase[i], keyArray[c % keyArray.length], encrypt));
            c++;
        } else {
            letters.push(charCode);
        }
    }

    return String.fromCharCode(...letters);
};

function letterShift(letter: string, shift: number, forward: boolean) {
    shift = forward ? shift : -1 * shift;
    let charCode: number = letter.charCodeAt(0);
    if ((65 <= charCode) && (charCode <= 90)) {
        charCode = 65 + ((charCode + shift - 65 + 26) % 26);
    } else if ((97 <= charCode) && (charCode <= 122)) {
        charCode = 97 + ((charCode + shift - 97 + 26) % 26);
    }
    return charCode;
}

function findOffset(letter: string) {
    letter = letter.toUpperCase(); // Приводим к верхнему регистру
    let charCode: number = letter.charCodeAt(0) - 65;
    return (charCode >= 0 && charCode < 26) ? charCode : 0; // Убедитесь, что код в пределах 0-25
}

let phrase: string = "PhillyDev";
phrase = "l'g d phvravel cro'ui d fhfrqvol";
let key: string = "dude";

let result: string = vigenereCipher(phrase, key, false);
console.log(phrase, result);