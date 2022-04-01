window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');

	window.onscroll = function() {scrollFunction()};

	var logoLg = document.getElementById("logo--lg")
	var logoMd = document.getElementById("logo--md")
	var logoSm = document.getElementById("logo--sm")
	var miniBio = document.getElementById("mini-bio")

	function scrollFunction() {
		if (document.body.scrollTop > 10 ||
			document.documentElement.scrollTop > 10) {
			logoLg.style.fontSize = "2em"
			logoMd.style.fontSize = "2em"
			logoSm.style.fontSize = "1.5em"
			miniBio.style.opacity = "0%"
			miniBio.style.transform = "translate(0, -1em)"
			miniBio.style.height = "0"
		} else {
			logoLg.style.fontSize = "4em"
			logoMd.style.fontSize = "3em"
			logoSm.style.fontSize = "2em"
			miniBio.style.opacity = "100%"
			miniBio.style.transform = "translate(0, 0)"
			miniBio.style.height = "auto"
		}
	}
});
