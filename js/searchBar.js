/* ============================================= */
/*       Search Bar Functionality                */
/* ============================================= */

function search_gallery() {
	// get user input and make it lowercase
	let input = document.getElementById("searchBar").value;
	input = input.toLowerCase();
	console.log(input);
	
	// store gallery images in a variable
	let galleryImage = document.getElementsByClassName("gallery__image");
	
	// logic for hiding or showing images based on user input
	for (i = 0; i < galleryImage.length; i++) {
		let imageCaption = galleryImage[i].getAttribute("data-caption").toLowerCase();
		
		if (!imageCaption.includes(input)) {
			galleryImage[i].style.display="none";
		} else {
			galleryImage[i].style.display="block";
		}
	}
}