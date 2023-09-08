// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textArea = document.querySelector("textarea");
const stats = document.getElementById("stat");


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

textArea.addEventListener("input", function (e) {
  words = textArea.value.trim().split(" ").length;
  chars = textArea.value.trim().length;

stats.innerHTML = "You've written " + words + " words and " + chars + " characters.";

});