window.addEventListener("load", sidenVises)

function sidenVises() {
	console.log("sidenVises");
	document.querySelector(".burger").addEventListener("click", toggleMenu)

//	document.querySelector("#sky_op").classList.add("movement")
}

function toggleMenu() {
	console.log("toggleMenu")
	document.querySelector(".nav_links").classList.toggle("nav_active");

	let erSkjult = document.querySelector(".nav_links").classList.contains("nav_active")

	if (erSkjult == true) {
		document.querySelector(".burger").textContent = "X";
	} else {
		document.querySelector(".burger").textContent = "☰";
	}
}
