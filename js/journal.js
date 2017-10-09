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
