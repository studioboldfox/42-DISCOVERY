// récupération de l'élément div
const reddiv = document.querySelector('.reddiv');

// accès aux valeurs width & height & color de la class reddiv dans le CSS
const cssWidthSize = getComputedStyle(reddiv, null);
const cssHeightSize = getComputedStyle(reddiv, null);
const cssColorDiv = getComputedStyle(reddiv, null);

// récupération des valeurs width & height & color
let widthSize = cssWidthSize.getPropertyValue("width");
let heightSize = cssHeightSize.getPropertyValue("height");
let colorDiv = cssColorDiv.getPropertyValue("background-color");

main()

function main() {
	conversionPixels();
	modifySize();
}


function conversionPixels() {
	const parsedWidth = parseInt(widthSize, 10);
	const parsedHeight = parseInt(heightSize, 10);

	if (isNaN(parsedWidth) || isNaN(parsedHeight)) {
		return 0;
	}
	return parsedWidth && parsedHeight;
}

function modifySize() {
	newWidth = 0;
	newHeight = 0;
	reddiv.addEventListener("click", (e) => {
		e.preventDefault;
		for (i = 0; i < 21; i++){
			parsedWidth = newWidth + 10;
		}
	});
}

function changeStyle() {

}

