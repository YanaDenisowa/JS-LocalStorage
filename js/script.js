
let form = document.getElementById("form");
let messages = document.getElementById("messages");
let message = document.getElementById("message");

let inputLogin = document.getElementById("login");
let inputPassw = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click", checkAutoriz);

form.addEventListener("submit",saveMessagesToStorage);	

function checkAutoriz(event) {
	event.preventDefault();
	console.log(inputLogin.value);
	console.log(inputPassw.value);

	if (("Yana" == inputLogin.value) && ("123" == inputPassw.value)){
		localStorage.setItem("isAutorized", "true");
		window.location.replace("./index2.html");
	}

	else {
		localStorage.setItem("isAutorized", "false");
		window.location.replace("./index2.html");

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

	clearForm();

}
function getMessagesFromStorage() {
	return (localStorage.length) ? JSON.parse(localStorage.getItem("messages")): [];
}
function clearForm() {
	message.value="";
}
function clearMessage() {
	message.innerHTML = "";
	clearForm();
	clearMessage();
}


