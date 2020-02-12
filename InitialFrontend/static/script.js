let body = document.getElementById('main');
let blinkText = body.getElementsByTagName('div')[2]

let loginButton = body.getElementsByTagName('button')[0]
let signupButton = document.getElementById('signupButton');
let applyButton = document.getElementById('applyButton');

let modal = document.getElementById('myModal');
let modalContent = document.getElementById('modalContent');
let closeModal = document.getElementById('closeModal');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearChildren(obj) {
	let children = obj.children;
	for (let i = 0; i < children.length; i++) {
		if (children[i].id != "closeModal") {
			children[i].parentNode.removeChild(children[i])
		}
	}

}

// Blink for welcome message
async function showText() {
	while (1) {
		blinkText.innerText = 'Draconic Esports ';
		await sleep(500);
		blinkText.innerText = 'Draconic Esports_';
		await sleep(500);
	}
}

// Display/hide login modal
loginButton.onclick = function() {
	modal.style.display = "table";
  	modalContent.style.width =  '35%';
  	modalContent.style.height =  '38%';

	let displayFrame = document.createElement('div');
	modalContent.appendChild(displayFrame)

	let title = document.createElement('div');
	title.innerText = "Login";
	title.setAttribute('class', 'modalTitle');
	displayFrame.appendChild(title);

	let name = document.createElement('div');
	name.innerText = "Username";
	name.setAttribute('class', 'secondFont');
	displayFrame.appendChild(name)

	let nameInput = document.createElement('input');

	
	
	displayFrame.appendChild(nameInput);

	let password = document.createElement('div');
	password.innerText = "Password";
	password.setAttribute('class', 'secondFont');
	displayFrame.appendChild(password)

	let passInput = document.createElement('input');
	passInput.setAttribute('type', 'password')
	displayFrame.appendChild(passInput);

	let loginButton = document.createElement('button');
	loginButton.innerText = "Login";
	loginButton.setAttribute('padding-top', '30px')
	loginButton.setAttribute('name', 'login_button')
	loginButton.setAttribute('value', 'name')
	loginButton.setAttribute('href', '/')
	displayFrame.appendChild(loginButton);
}

signupButton.onclick = function() {
	modal.style.display = "table";
  	modalContent.style.width =  '35%';
  	modalContent.style.height =  '56%';

	let displayFrame = document.createElement('div');
	modalContent.appendChild(displayFrame)

	let title = document.createElement('div');
	title.innerText = "Signup";
	title.setAttribute('class', 'modalTitle');
	displayFrame.appendChild(title);

	let name = document.createElement('div');
	name.innerText = "Username";
	name.setAttribute('class', 'secondFont');
	displayFrame.appendChild(name)

	let nameInput = document.createElement('input');
	displayFrame.appendChild(nameInput);

	let email = document.createElement('div');
	email.innerText = "Email";
	email.setAttribute('class', 'secondFont');
	displayFrame.appendChild(email)
	
	let emailInput = document.createElement('input');
	displayFrame.appendChild(emailInput);

	let password = document.createElement('div');
	password.innerText = "Password";
	password.setAttribute('class', 'secondFont');
	displayFrame.appendChild(password)

	let passInput = document.createElement('input');
	passInput.setAttribute('type', 'password')
	displayFrame.appendChild(passInput);

	let password2 = document.createElement('div');
	password2.innerText = "Re-type password";
	password2.setAttribute('class', 'secondFont');
	displayFrame.appendChild(password2)

	let passInput2 = document.createElement('input');
	passInput2.setAttribute('type', 'password')
	displayFrame.appendChild(passInput2);

	let div = document.createElement('div');
	displayFrame.appendChild(div);

	let loginButton = document.createElement('button');
	loginButton.innerText = "Create account";
	loginButton.setAttribute('padding-top', '30px')
	loginButton.setAttribute('name', 'login_button')
	loginButton.setAttribute('value', 'name')
	loginButton.setAttribute('href', '/')
	displayFrame.appendChild(loginButton);
}

closeModal.onclick = function() {
	clearChildren(modalContent);
	modal.style.display = "none";
}

// Display/hide apply form
applyButton.onclick = function() {
	modal.style.display = "table";
	modalContent.style.height = "70%";
	modalContent.style.width = "50%";

	let displayFrame = document.createElement('div');
	modalContent.appendChild(displayFrame)

	let title = document.createElement('div');
	title.innerText = "Draconic Application";
	title.setAttribute('class', 'modalTitle');

	displayFrame.appendChild(title);

	let name = document.createElement('div');
	name.innerText = "Name *";
	name.setAttribute('class', 'secondFont');

	displayFrame.appendChild(name)

	let nameInput = document.createElement('input');
	nameInput.maxLength = "15";
	displayFrame.appendChild(nameInput);
	displayFrame.appendChild(nameInput);
	let age = document.createElement('div');
	age.innerText = "Age *";
	age.setAttribute('class', 'secondFont');
	displayFrame.appendChild(age)

	let ageInput = document.createElement('input');
	ageInput.maxLength = "3";
	displayFrame.appendChild(ageInput);

	let email = document.createElement('div');
	email.innerText = "Email *";
	email.setAttribute('class', 'secondFont');
	displayFrame.appendChild(email)

	let emailInput = document.createElement('input');
	emailInput.maxLength = "3";
	displayFrame.appendChild(emailInput);

	let phone = document.createElement('div');
	phone.innerText = "Phone";
	phone.setAttribute('class', 'secondFont');
	displayFrame.appendChild(phone)

	let phoneInput = document.createElement('input');
	displayFrame.appendChild(phoneInput)

	let team = document.createElement('div');
	team.innerText = "Team *";
	team.setAttribute('class', 'secondFont');
	displayFrame.appendChild(team)
	let selectTeam = document.createElement('select');
	selectTeam.setAttribute('class', 'select-css')	
	let option1 = document.createElement('option');
	option1.innerText = "CSGO";
	let option2 = document.createElement('option');
	option2.innerText = "Dota 2";
	selectTeam.appendChild(option1);
	selectTeam.appendChild(option2);
	selectTeam.style['padding-top'] = '10px';

	displayFrame.appendChild(selectTeam);

	let rank = document.createElement('div');
	rank.innerText = "In-game rank *";
	rank.setAttribute('class', 'secondFont');
	rank.style['padding-top'] = '18px';
	displayFrame.appendChild(rank)

	let rankInput = document.createElement('input');
	rankInput.maxLength = "15";
	displayFrame.appendChild(rankInput);

	let tExp = document.createElement('div');
	tExp.setAttribute('class', 'secondFont');
	tExp.innerText = "Previous tournament experience";

	displayFrame.appendChild(tExp)

	let tInput = document.createElement('input');
	tInput.maxLength = "50";
	tInput.style.height = '90px';
	displayFrame.appendChild(tInput);

	let oExp = document.createElement('div');
	oExp.setAttribute('class', 'secondFont');
	oExp.innerText = "Relevent details or experience";
	displayFrame.appendChild(oExp)

	let oInput = document.createElement('input');
	oInput.maxLength = "50";
	oInput.style.height = '90px';
	displayFrame.appendChild(oInput);

	let why = document.createElement('div');
	why.setAttribute('class', 'secondFont');
	why.innerText = "Why would you be a good fit for your selected team? *"
	displayFrame.appendChild(why)

	let whyInput = document.createElement('input');
	whyInput.maxLength = "1000";
	whyInput.style.height = '110px';
	whyInput.style.direction = 'ltr'
	whyInput.style.overflow = 'hidden'	
	displayFrame.appendChild(whyInput)



	let div = document.createElement('div');
	displayFrame.appendChild(div);

	let applyButton = document.createElement('button');
	applyButton.innerText = "Apply";
	displayFrame.appendChild(applyButton)

}


showText()
