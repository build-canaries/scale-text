
function ScaleText(listOfText, height, width) {

    var fontSizeForSingleLetter = 10
    var widthOfSingleLetter = 6
    var heightOfSingleLetter = 13

    var fontPaddingInCharacters = 2

    function flatten(array) {
        return [].concat.apply([], array);
    }

    function findLongestWord() {
        var individualWords = flatten(listOfText.map(function (item) {
            return item.split(' ')
        }))
        return longestStringInArray(individualWords);
    }

    function longestStringInArray(words) {
        return words.reduce(function (largestFound, candidate) {
            return Math.max(candidate.length, largestFound)
        }, 0)
    }

    function linesForWord(words) {
        var longestWordSize = findLongestWord() + fontPaddingInCharacters
        var lineNumber = 1
        var currentLinePosition = 0

        words.forEach(function (word) {
            if ((word.length + currentLinePosition) > longestWordSize) {
                lineNumber++
                currentLinePosition = 0
            }
            currentLinePosition += word.length + 1
        })

        return lineNumber
    }

    this.maxFontSizeByWidth = function () {
        var longestWord = findLongestWord() + fontPaddingInCharacters
        var longestWordSize = (widthOfSingleLetter * longestWord)
        return (width / longestWordSize) * fontSizeForSingleLetter
    }

    this.maxFontSizeByHeight = function () {
        var numberOfLines = listOfText.map(function (item) {
            return linesForWord(item.split(' '))
        })
        var largestNumberOfLines = Math.max.apply(Math, numberOfLines)

        var maximumFontHeightInPixels = (height / largestNumberOfLines) / heightOfSingleLetter

        return maximumFontHeightInPixels * fontSizeForSingleLetter
    }

    this.singleLineIdeal = function() {
        var longestSentence = longestStringInArray(listOfText) + fontPaddingInCharacters
        var longestSentenceSize = (widthOfSingleLetter * longestSentence)
        var fontSizeByWidth = (width / longestSentenceSize) * fontSizeForSingleLetter

        var maximumFontHeightInPixels = height / heightOfSingleLetter
        var fontSizeByHeight = maximumFontHeightInPixels * fontSizeForSingleLetter

        return Math.floor(Math.min(fontSizeByWidth, fontSizeByHeight))
    }

    this.ideal = function () {
        return Math.floor(Math.min(this.maxFontSizeByWidth(), this.maxFontSizeByHeight()))
    }
}

module.exports = ScaleText
