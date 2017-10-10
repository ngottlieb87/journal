(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, entry){
  this.title = title;
  this.entry = entry;
}

Journal.prototype.countWords = function(entry) {
  var arrayOfWords = entry.split(" ");
  var numOfWords = arrayOfWords.length;
  return numOfWords;
};

Journal.prototype.countVowels = function(entry) {
  var numOfVowels = 0;
  var arrayOfVowels = ["a", "e", "i", "o", "u"];
  var concatString = entry.split(" ").join("");
  var lowerCaseString = concatString.toLowerCase();
  var arrayOfChars = lowerCaseString.split("");
  for(i=0 ; i < arrayOfChars.length ; i++){
    if(arrayOfVowels.indexOf(arrayOfChars[i]) >= 0){
      numOfVowels += 1;
    }
  }
  return numOfVowels;
};

Journal.prototype.countConsonants = function(entry) {
  var numOfConsonants = 0;
  var numOfVowels = 0;
  var arrayOfVowels = ["a", "e", "i", "o", "u"];
  var concatString = entry.split(" ").join("");
  var lowerCaseString = concatString.toLowerCase();
  var arrayOfChars = lowerCaseString.split("");
  console.log(arrayOfChars);
  for(i=0 ; i < arrayOfChars.length ; i++){
    if(arrayOfVowels.indexOf(arrayOfChars[i]) < 0){
      numOfConsonants += 1;
    }
  }
  return numOfConsonants;
};

Journal.prototype.teaser = function(entry) {
  var arrayOfWords = entry.split(" ");
  var teaserString = "";
  var numOfWords = arrayOfWords.length;
  console.log(numOfWords);
  if (numOfWords >= 8){
    for(i=0; i<8; i++){
      teaserString = teaserString.concat(arrayOfWords[i], " ");
    }
    teaserString = teaserString + "...";
  } else {
    teaserString = entry;
  }
  return teaserString;
};

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/journal.js":1}]},{},[2]);
