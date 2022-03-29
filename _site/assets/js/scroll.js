window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');

	window.onscroll = function() {scrollFunction()};

	var logo = document.getElementById("logo")
	var miniBio = document.getElementById("mini-bio")

	function scrollFunction() {
		if (document.body.scrollTop > 10 ||
			document.documentElement.scrollTop > 10) {
			logo.style.fontSize = "2em"
			miniBio.style.opacity = "0%"
			miniBio.style.transform = "translate(0, -1em)"
			miniBio.style.height = "0"
		} else {
			logo.style.fontSize = "4em"
			miniBio.style.opacity = "100%"
			miniBio.style.transform = "translate(0, 0)"
			miniBio.style.height = "auto"
		}
	}
});
