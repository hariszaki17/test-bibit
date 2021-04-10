var array = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

class PalindromeGroup {
    #listWord
    #groupWord
    #baseWord
    #baseWordIndexGroup
    constructor(listWord = []) {
        this.#listWord = listWord
        this.#baseWord = this.#listWord.shift()
        this.#baseWordIndexGroup = 0
        this.#groupWord = [
            [ this.#baseWord ]
        ]
        this.grouping()

    }
    get groupWord() {
        return this.#groupWord
    }

    grouping() {
        if (!this.#listWord.length) {
            return this.#groupWord
        } else if (this.#listWord.length > 1) {
            this.#groupWord.push([])
        }

        var listPalindromeIndex = []
        for (var i = 0; i < this.#listWord.length; i++) {
            if (this.isPalindrome(this.#listWord[i])) {
                var groupIndex = this.#baseWordIndexGroup
                var groupValue = this.#listWord[i]
                this.#groupWord[groupIndex].push(groupValue)
                listPalindromeIndex.push(i)
            }
        }

        var tempListWord = []
        for (var i = 0; i < this.#listWord.length; i++) {
            var isPalindromeIndex = false
            for (var j = 0; j < listPalindromeIndex.length; j++) {
                if (i === listPalindromeIndex[j]) {
                    isPalindromeIndex = true
                    break
                }
            }
            if (!isPalindromeIndex) {
                tempListWord.push(this.#listWord[i])
            }
        }

        this.#listWord = tempListWord
        this.#baseWord = this.#listWord[0]
        this.#baseWordIndexGroup++
        this.grouping()
    }

    isPalindrome(compareWord) {
        var baseWordArr = this.#baseWord.split('')
        var compareWordArr = compareWord.split('')

        if (baseWordArr.length !==  compareWordArr.length) {
            return false
        }

        var resultPalindrome = false
        for (var i = 0; i < baseWordArr.length; i++) {
            var letterExist = false
            for (var j = 0; j < compareWordArr.length; j++) {
                if (baseWordArr[i] === compareWordArr[j]) {
                    letterExist = true 
                    compareWordArr.splice(j, 1)
                    break
                }
            }
            
            if (!compareWordArr.length) {
                resultPalindrome = true
                break
            }
            if (!letterExist) {
                break
            }
        }
        
        return resultPalindrome
    }
}

var palidromeObj = new PalindromeGroup(array)
console.log(palidromeObj.groupWord);