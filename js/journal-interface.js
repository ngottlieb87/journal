var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var journal = new Journal(title,entry);
    var teaser = journal.teaser(entry);

    var wordCount  = journal.countWords(entry);
    var vowelCount = journal.countVowels(entry);
    var consonantCount = journal.countConsonants(entry);
    var teaserOutput = journal.teaser(entry);

    $("#entries").prepend('<p>Entry Title: ' + title + '<br>' + 'Entry text: ' + teaser + '</p>' + '<ul><li>Vowel Count: ' + vowelCount + '<li>Consonant Count: ' + consonantCount + '<li>Word Count: ' + wordCount);

    });
  });
