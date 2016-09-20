// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

var inputText = document.getElementById("input");
var createText = document.getElementById("create");
var outputText = document.getElementById("output");
var deleteListener = document.getElementsByClassName("delete");

function createCard() {
	var inputDiv = inputText.value;
	outputText.innerHTML += "<div>" + inputDiv + "<button class= 'delete'>Delete</button></div>";
	deleteListenerEvent();
}

function deleteListenerEvent() {
	for (var i = 0; i < deleteListener.length; i++) {
		deleteListener[i].addEventListener("click", deleteCard);
	}
}

function deleteCard(event) {
	var currentCard =  event.target.parentElement;
	outputText.removeChild(currentCard);
}

function enterKeyPress(keyPress){
	if (keyPress.which === 13){
		createCard();
		inputText.value = "";
	}
}

createText.addEventListener("click", createCard);
document.addEventListener("keyPress", enterKeyPress);