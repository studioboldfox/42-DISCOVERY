main();

function main() {
	biggerDiv();
	minimalDiv();
}

//////////////////////////////////////////////////////////////////////////
////////// MISE EN PLACE DU GROSSISEMENT ET DU CHANGEMENT DE COULEUR /////
//////////////////////////////////////////////////////////////////////////

function biggerDiv() {
	// récupération de l'élément div
	const originalDiv = document.querySelector('.originalDiv');

	// écoute de l'evenement du click sur la div
	// application des fonctions choisies
	originalDiv.addEventListener("click", () => {

		// accès aux valeurs width & height & color de la class originalDiv dans le CSS
		const cssWidthSize = getComputedStyle(originalDiv, null);
		const cssColorDiv = getComputedStyle(originalDiv, null);

		// récupération des valeurs width & height & color
		let widthSize = cssWidthSize.getPropertyValue("width");
		let colorDiv = cssColorDiv.getPropertyValue("background-color");

		// parsing de la taille de la div
		let parsedSize = parseInt(widthSize) + 10;
		console.log(parsedSize);

		if (parsedSize > 420)
			parsedSize = 200;
		originalDiv.style.borderRadius = originalDiv.style.width = originalDiv.style.height = parsedSize.toString() + 'px';

		let changeColor;
		if (colorDiv === 'rgb(255, 0, 0)') // red
			changeColor = 'green';
		else if (colorDiv === 'rgb(0, 128, 0)') // green
			changeColor = 'blue';
		else
			changeColor = 'red';
		originalDiv.style.backgroundColor = changeColor;
	});
}


////////////////////////////////////////////////////////////////////////////
////////// MISE EN PLACE DU RETRECISSEMENT ET DU CHANGEMENT DE COULEUR /////
////////////////////////////////////////////////////////////////////////////

function minimalDiv() {
	// récupération de l'élément div
	const originalDiv = document.querySelector('.originalDiv');

	// écoute de l'evenement du click sur la div
	// application des fonctions choisies
	originalDiv.addEventListener("mouseout", () => {

		// accès aux valeurs width & height & color de la class originalDiv dans le CSS
		const cssWidthSize = getComputedStyle(originalDiv, null);
		const cssColorDiv = getComputedStyle(originalDiv, null);

		// récupération des valeurs width & height & color
		let widthSize = cssWidthSize.getPropertyValue("width");
		let colorDiv = cssColorDiv.getPropertyValue("background-color");

		// parsing de la taille de la div
		let parsedSize = parseInt(widthSize) - 5;
		console.log(parsedSize);

		if (parsedSize < 200)
			parsedSize = 200;
		originalDiv.style.borderRadius = originalDiv.style.width = originalDiv.style.height = parsedSize.toString() + 'px';

		let changeColor;
		if (colorDiv === 'rgb(255, 0, 0)') // red
			changeColor = 'red';
		else if (colorDiv === 'rgb(0, 128, 0)') // green
			changeColor = 'blue';
		else
			changeColor = 'green';
		originalDiv.style.backgroundColor = changeColor;
	});
}
