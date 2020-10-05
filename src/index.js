module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    let resultUnits = '';
    let resultDozens = '';
    let resultHundreds = '';
    let lastNumber = number % 10;
    let secondNumber = (Math.trunc(number / 10)) % 10;
    let firstNumber = Math.trunc(number / 100);

    if (secondNumber !== 1) {
        switch (lastNumber) {
            case 0:
                resultUnits = '';
                break
            case 1:
                resultUnits = 'one';
                break
            case 2:
                resultUnits = 'two';
                break
            case 3:
                resultUnits = 'three';
                break
            case 4:
                resultUnits = 'four';
                break
            case 5:
                resultUnits = 'five';
                break
            case 6:
                resultUnits = 'six';
                break
            case 7:
                resultUnits = 'seven';
                break
            case 8:
                resultUnits = 'eight';
                break
            case 9:
                resultUnits = 'nine';
                break
        }
        switch (secondNumber) {
            case 0:
                resultDozens = '';
                break
            case 2:
                resultDozens = 'twenty';
                break
            case 3:
                resultDozens = 'thirty';
                break
            case 4:
                resultDozens = 'forty';
                break
            case 5:
                resultDozens = 'fifty';
                break
            case 6:
                resultDozens = 'sixty';
                break
            case 7:
                resultDozens = 'seventy';
                break
            case 8:
                resultDozens = 'eighty';
                break
            case 9:
                resultDozens = 'ninety';
                break
        }
    } else if (secondNumber === 1) {
        switch (lastNumber) {
            case 0:
                resultDozens = 'ten';
                break
            case 1:
                resultDozens = 'eleven';
                break
            case 2:
                resultDozens = 'twelve';
                break
            case 3:
                resultDozens = 'thirteen';
                break
            case 4:
                resultDozens = 'fourteen';
                break
            case 5:
                resultDozens = 'fifteen';
                break
            case 6:
                resultDozens = 'sixteen';
                break
            case 7:
                resultDozens = 'seventeen'
                break
            case 8:
                resultDozens = 'eighteen';
                break
            case 9:
                resultDozens = 'nineteen';
                break
        }
    }



    switch (firstNumber) {
        case 0:
            resultHundreds = '';
            break
        case 1:
            resultHundreds = 'one hundred';
            break
        case 2:
            resultHundreds = 'two hundred';
            break
        case 3:
            resultHundreds = 'three hundred';
            break
        case 4:
            resultHundreds = 'four hundred';
            break
        case 5:
            resultHundreds = 'five hundred';
            break
        case 6:
            resultHundreds = 'six hundred';
            break
        case 7:
            resultHundreds = 'seven hundred';
            break
        case 8:
            resultHundreds = 'eight hundred';
            break
        case 9:
            resultHundreds = 'nine hundred';
            break
    }
    if (resultHundreds === '' && resultDozens === '') {
        return `${resultUnits}`;
    } else if (resultUnits === '' && resultDozens === '') {
        return `${resultHundreds}`
    } else if (resultHundreds === '' && resultUnits === '') {
        return `${resultDozens}`
    } else if (resultHundreds === '') {
        return `${resultDozens} ${resultUnits}`
    } else if (resultUnits === '') {
        return `${resultHundreds} ${resultDozens}`
    } else if (resultDozens === '') {
        return `${resultHundreds} ${resultUnits}`
    } else {
        return `${resultHundreds} ${resultDozens} ${resultUnits}`
    }
}
