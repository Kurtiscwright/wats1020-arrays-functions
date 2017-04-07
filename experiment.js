"use strict";

var originalText = "There are two hard things in Computer Science: Cache invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;



function truncateWords(originalText) {

    var spText = originalText.split(" "); //Here should be splitting the original text variable into an array

    spText.splice(8, 100, "..."); //This line drops any items after 8 up to 100 and adds ... to the end

    //shrtWords.push("..."); This was unneeded

    var finWords = spText.join(" "); //this joins everything back together so it doesn't have commas after each word

    return finWords; //this will return the result so the function result can be read later

}


var shortText = truncateWords(originalText, wordLimit);
//var shortText = originalText.splice(8, numWords, "...") this idea did not work
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
