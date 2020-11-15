let buttonNode = document.getElementById('button');
let inputNode = document.getElementById('number')
let spanNode = document.getElementById('result');

buttonNode.addEventListener('click', () => {

    let inputValue = inputNode.value;

    let converter = (num) => {
        let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

        let toString = num.toString();

        if (num === 0) {
            return "zero"
        }
        if (toString.length > 12) {
            return `Error! Maximum number of digits is 12!`
        }
        if (toString[0] === '0') {
            return `Error! Enter valid number!`
        }
        if (num < 0) {
            return `Please enter a positive number!`
        }
        if (num < 20) {
            return ones[num]
        }
        if (num > 19 && num < 100) {
            return `${tens[toString[0]]} ${ones[toString[1]]}`
        }
        // 3 DIGITS FUNCTION
        //*********************************
        let threeDigits = (stringOf3) => {
            if (stringOf3[0] === '0' && stringOf3[1] === '1') {
                return `${ones[parseInt(stringOf3[1]+stringOf3[2])]}`
            } else if (stringOf3[0] === '0') {
                return `${tens[stringOf3[1]]} ${ones[stringOf3[2]]}`
            } else if (stringOf3[1] === '1') {
                return `${ones[stringOf3[0]]} hundred ${ones[parseInt(stringOf3[1]+stringOf3[2])]}`
            } else {
                return `${ones[stringOf3[0]]} hundred ${tens[stringOf3[1]]} ${ones[stringOf3[2]]}`
            }
        }

        // 2 DIGIT FUNCTION
        //**********************************
        let twoDigits = (string) => {
            if (string[0] === '1') {
                return `${ones[parseInt(string[0]+string[1])]}`
            } else {
                return `${tens[string[0]]} ${ones[string[1]]}`
            }
        }

        // 100 to 999
        if (toString.length === 3) {
            return threeDigits(toString)
        }
        //1.000 to 9.999
        if (toString.length === 4) {
            return `${ones[toString[0]]} thousand ${threeDigits(toString.slice(1))}`
        }
        //10.000 to 99.999
        if (toString.length === 5) {
            return `${twoDigits(toString.slice(0, 2))} thousand ${threeDigits(toString.slice(2))}`
        }
        //100.000 to 999.999
        if (toString.length === 6) {
            return `${threeDigits(toString.slice(0, 3))} thousand ${threeDigits(toString.slice(3))}`
        }
        //1.000.000 to 9.999.999
        if (toString.length === 7) {
            if (toString[1] === '0' && toString[2] === '0' && toString[3] === '0') {
                return `${ones[toString[0]]} million ${threeDigits(toString.slice(4))}`
            } else {
                return `${ones[toString[0]]} million ${threeDigits(toString.slice(1, 4))} thousand ${threeDigits(toString.slice(4))}`
            }
        }
        //10.000.000 to 99.999.999
        if (toString.length === 8) {
            if (toString[2] === '0' && toString[3] === '0' && toString[4] === '0') {
                return `${twoDigits(toString.slice(0, 2))} million ${threeDigits(toString.slice(5))}`
            } else {
                return `${twoDigits(toString.slice(0, 2))} million ${threeDigits(toString.slice(2, 5))} thousand ${threeDigits(toString.slice(5))}`
            }
        }
        //100.000.000 to 999.999.999
        if (toString.length === 9) {
            if (toString[3] === '0' && toString[4] === '0' && toString[5] === '0') {
                return `${threeDigits(toString.slice(0, 3))} million ${threeDigits(toString.slice(6))}`
            } else {
                return `${threeDigits(toString.slice(0, 3))} million ${threeDigits(toString.slice(3, 6))} thousand ${threeDigits(toString.slice(6))}`
            }
        }
        //1.000.000.000 to 9.999.999.999
        if (toString.length === 10) {
            if (toString[1] === '0' && toString[2] === '0' && toString[3] === '0' && toString[4] === '0' && toString[5] === '0' && toString[6] === '0') {
                return `${ones[toString[0]]} billion ${threeDigits(toString.slice(7))}`
            } else if (toString[1] === '0' && toString[2] === '0' && toString[3] === '0') {
                return `${ones[toString[0]]} billion ${threeDigits(toString.slice(4, 7))}thousands ${threeDigits(toString.slice(7))}`
            } else if (toString[4] === '0' && toString[5] === '0' && toString[6] === '0') {
                return `${ones[toString[0]]} billion ${threeDigits(toString.slice(1, 4))} million ${threeDigits(toString.slice(7))}`
            } else {
                return `${ones[toString[0]]} billion ${threeDigits(toString.slice(1, 4))} million ${threeDigits(toString.slice(4, 7))} thousand ${threeDigits(toString.slice(7))}`
            }
        }
        //10.000.000.000 to 99.999.999.999
        if (toString.length === 11) {
            if (toString[2] === '0' && toString[3] === '0' && toString[4] === '0' && toString[5] === '0' && toString[6] === '0' && toString[7] === '0') {
                return `${twoDigits(toString.slice(0, 2))} billion ${threeDigits(toString.slice(8))}`
            } else if (toString[2] === '0' && toString[3] === '0' && toString[4] === '0') {
                return `${twoDigits(toString.slice(0, 2))} billion ${threeDigits(toString.slice(5, 8))} thousand ${threeDigits(toString.slice(8))}`
            } else if (toString[5] === '0' && toString[6] === '0' && toString[7] === '0') {
                return `${twoDigits(toString.slice(0, 2))} billion ${threeDigits(toString.slice(2, 5))} million ${threeDigits(toString.slice(8))}`
            } else {
                return `${twoDigits(toString.slice(0, 2))} billion ${threeDigits(toString.slice(2, 5))} million ${threeDigits(toString.slice(5, 8))} thousand ${threeDigits(toString.slice(8))}`
            }
        }
        //100.000.000.000 to 999.999.999.999
        if (toString.length === 12) {
            if (toString[3] === '0' && toString[4] === '0' && toString[5] === '0' && toString[6] === '0' && toString[7] === '0' && toString[8] === '0') {
                return `${threeDigits(toString.slice(0,3))} billion ${threeDigits(toString.slice(9))}`
            } else if (toString[3] === '0' && toString[4] === '0' && toString[5] === '0') {
                return `${threeDigits(toString.slice(0,3))} billion ${threeDigits(toString.slice(6, 9))} thousand ${threeDigits(toString.slice(9))}`
            } else if (toString[6] === '0' && toString[7] === '0' && toString[8] === '0') {
                return `${threeDigits(toString.slice(0,3))} billion ${threeDigits(toString.slice(3, 6))} million ${threeDigits(toString.slice(9))}`
            } else {
                return `${threeDigits(toString.slice(0,3))} billion ${threeDigits(toString.slice(3, 6))} million ${threeDigits(toString.slice(6, 9))} thousand ${threeDigits(toString.slice(9))}`
            }
        }
    }
    spanNode.textContent = converter(inputValue)
    console.log(converter(inputValue))
    console.log(toString)
})