"use strict";

var originalText = "There are two hard things in Computer Science: Cache invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;



function truncateWords(originalText) {

    var spText = originalText.split(" ");

    spText.splice(8, 100, "...");

    //shrtWords.push("...");

    var finWords = spText.join(" ");

    return finWords;

}


var shortText = truncateWords(originalText, wordLimit);
//var shortText = originalText.splice(8, numWords, "...")
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
