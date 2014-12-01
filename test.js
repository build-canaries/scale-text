var expect = require('chai').expect
var ScaleText = require('./index')

describe('height and width bound', function() {

    it('constrained by width', function() {
        // height is larger than the width constraint

        // longest word is size 4, plus padding of 2 so longest line is 6 characters
        // width of single letter is 6, so longest line is 36
        // equation is (width / longestLineSize) * fontSizeForSingleLetter
        // (100 / 36) * 10 = 27
        var width = 100

        expect(new ScaleText(['word'], 50, width).ideal()).to.equal(27)
    })

    it('constrained by height', function() {
        // width is larger than the height constraint

        // work out maximum number of number of lines (set by the width), in this case 1
        // equation is (height / largestNumberOfLines) / heightOfSingleLetter * fontSizeForSingleLetter
        // (20 / 1) / 13 * 10 = 15

        expect(new ScaleText(['word'], 20, 100).ideal()).to.equal(15)
    })

    it('constrained by height over multiple lines', function() {
        // width is larger than the height constraint

        // work out maximum number of number of lines (set by the width), in this case 1
        // equation is (height / largestNumberOfLines) / heightOfSingleLetter * fontSizeForSingleLetter
        // (20 / 3) / 13 * 10 = 5

        expect(new ScaleText(['word word word'], 20, 100).ideal()).to.equal(5)
    })
})

describe('single line', function() {
    it('constrained by width', function() {
        // word is size 10
        // each character is 6 pixels wide at size 10
        // there is a padding of 2 characters which ads 12 pixels
        // the size to give font size 10 is 72 width
        // the height is ignored
        expect(new ScaleText(['0123456789'], 50, 72).singleLineIdeal()).to.equal(10)
        expect(new ScaleText(["mesos trunk ubuntu build out of src disable java disable python disable webui"],
            150, 420).singleLineIdeal()).to.equal(8)
    })
})
