document.addEventListener("mouseup", function() {
const selectedText= window.getSelection().toString()
        if(selectedText.length > 0 ) {
const wordCount = selectedText.split(" ").length;
        if (wordCount < 10) {
        
console.log("Good — short and clear");
        } else if (wordCount <= 20) {
console.log("Okay — could be shorter");
        } else {
console.log("Too long for a headline");
     }
console.log("Word count:", wordCount);
                }
});     
