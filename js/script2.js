
let greet = document.getElementById("author");
let messages = document.getElementById("messages");
let message = document.getElementById("message");
let btn = document.getElementById("button");

btn.addEventListener("click", exitPage);


refreshing();

function refreshing() {
	// console.log(localStorage.getItem("isAutorized"));

	if (localStorage.getItem("isAutorized")=="true"){
		greet.innerText = "Hello Yana"; 
		drawMessage();
	}
		else if (localStorage.getItem("isAutorized")== "false"){
			 greet.innerText = "Your password or login isn't correct! Try again...";
		}
}

function exitPage(event){
	event.preventDefault();
	if (localStorage.getItem("isAutorized") == "false"){
		window.location.replace("./index1.html");
	}
	else if (localStorage.getItem("isAutorized") == "true"){
		window.location.replace("./index1.html");
	}
}

function saveMessagesToStorage(event){
 	event.preventDefault();
	let messagesFromStorage = getMessagesFromStorage();
	let currentDate = new Date();
	let newMessage = {
		text: message.value,
		date: ` ${currentDate.getHours()}:${currentDate.getMinutes()},
		${currentDate.getFullYear()}. ${Number(currentDate.getMonth())+1}. ${currentDate.getDate() }`
	}

	messagesFromStorage.push(newMessage);	
	localStorage.setItem("messages", JSON.stringify(messagesFromStorage));
}

function getMessagesFromStorage() {
	return (localStorage.length) ? JSON.parse(localStorage.getItem("messages")): [];
}

function drawMessage() {
	let messagesFromStorage = getMessagesFromStorage();
	console.log(messagesFromStorage)
	for(let x = 0; x < messagesFromStorage.length; x++) {

	let div = document.createElement("div");
	div.classList.add("message");
	div.innerHTML = messagesFromStorage[x].text;
	
	let span =  document.createElement("span");
	span.innerHTML = messagesFromStorage[x].date;
	div.append(span);
	messages.append(div);
	}
}
