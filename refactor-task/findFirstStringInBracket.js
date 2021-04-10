const getBracketIndex = (str) => {
    let indexOpenBracket = str.indexOf("(")
    let reversedStr = str.split("").reverse().join("")
    let indexReversedClosingBracket = reversedStr.indexOf(")")
    let indexClosingBracket = str.length - indexReversedClosingBracket
    let isBracketComplete = false

    if (indexOpenBracket >= 0 && indexClosingBracket >= 0) {
        isBracketComplete = true
    }

    if (isBracketComplete) {
        return {
            isBracketComplete: true,
            indexOpenBracket: indexOpenBracket + 1,
            indexClosingBracket: indexClosingBracket - 2
        }
    }

    return { 
        isBracketComplete: false,
        indexOpenBracket: null,
        indexClosingBracket: null
    }
}

const isNotEmptyString = (str) => {
    if (str.length > 0) {
        return true
    }
    return false
}

const findFirstStringInBracket = (str) => {
    if (isNotEmptyString(str)) {
        const { isBracketComplete, indexOpenBracket, indexClosingBracket } = getBracketIndex(str)
        if (isBracketComplete) {
            let firstStringInBracket = str.substr(indexOpenBracket, indexClosingBracket)
            return firstStringInBracket
        } else {
            return ""
        }
    }
}

console.log(findFirstStringInBracket("(awa)wefs)"));
