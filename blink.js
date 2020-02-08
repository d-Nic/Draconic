let body = document.getElementById('main');
let blinkText = body.getElementsByTagName('div')[2]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function showText() {
	while (1) {
		blinkText.innerText = 'Draconic Esports ';
		await sleep(500);
		blinkText.innerText = 'Draconic Esports_';
		await sleep(500);
	}
}

showText()
console.log(blinkText)
