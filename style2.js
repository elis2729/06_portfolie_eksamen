window.addEventListener("load", sidenVises)

function sidenVises() {
	console.log("sidenVises");
	document.querySelector(".burger").addEventListener("click", toggleMenu)

	document.querySelector("#due").addEventListener("click", due)
}

function due() {
	console.log("due")
	document.querySelector("#due").removeEventListener("click", due)
	document.querySelector(".due_click").classList.remove("hidden")
	setTimeout(stop, 400)
}

function stop() {
	console.log("stop")
	document.querySelector(".due_click").classList.add("hidden")
	sidenVises();
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
