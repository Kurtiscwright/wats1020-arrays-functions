"use strict";

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;



function truncateWords(longText, numWords) {


var spText = longText.split(" ");
console.log(spText);

var lthWords = spText.length;
console.log(lthWords);

var shrtWords = spText.splice(0, numWords);
console.log(shrtWords);

var numWords = lthWords - wordLimit;
console.log(numWords);

shrtWords.push("...");

var finWords = spText.join(" ");

return finWords;

}


var shortText = truncateWords(originalText, wordlimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
