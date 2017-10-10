var Journal = require('./../js/journal.js').journalModule;

describe('Journal', function() {

var journal;

  beforeEach(function() {
    journal = new Journal("A good day", "and something or another");
    longJournal = new Journal("A good day", "boy, what a day it was so freaking crazy I could go on and on")
  });

  it('allows user to enter a title and entry', function() {
    expect(journal.title).toEqual("A good day");
    expect(journal.entry).toEqual("and something or another");
  });

  it('counts the number of vowels in an entry', function() {
    expect(journal.countVowels("and something or another")).toEqual(8);
  });

  it('counts the number of consonants in an entry', function() {
    expect(journal.countConsonants("and something or another")).toEqual(13);
  });

  it('counts the number of words in an entry', function() {
    expect(journal.countWords("and something or another")).toEqual(4);
  });

  it('checks that the entry text shows only the first 8 words', function() {
    expect(longJournal.teaser("boy, what a day it was so freaking crazy I could go on and on")).toEqual("boy, what a day it was so freaking ...");
  });

});
