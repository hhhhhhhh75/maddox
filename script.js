function toggleMenuOn(){
	document.getElementById("side-menu").style.display="flex";
	document.getElementById("main-menu").style.display="none";
	document.getElementById("logo").style.display="none";
	document.getElementById("main-content").style.display="none";
	document.getElementById("side-menu").style.backgroundColor="white";
}

function toggleMenuOff(){
	document.getElementById("side-menu").style.display="none";
	document.getElementById("main-menu").style.display="flex";
	document.getElementById("logo").style.display="flex";
	document.getElementById("main-content").style.display="flex";
	document.getElementById("side-menu").style.backgroundColor="grey";
	document.getElementById("main-menu").style.height="60px";
	
}

function lightboxMainImage(img){
	var name = img.src;
	let source = document.getElementById("lightbox-image");
	source.src=name;
	document.getElementById("lightbox").style.display="flex";
	document.getElementById("photos-container").style.display="none";
	document.getElementById("lightbox-buttons").style.display="flex";
	document.getElementById("nav").style.marginTop ="0";
}

function closeLightbox(){
	document.getElementById("lightbox-buttons").style.display="none";
	document.getElementById("lightbox").style.display="none";
	document.getElementById("photos-container").style.display="flex";
}

function fadeIn(){
	document.getElementById("transition-image").style.opacity = "1";
	document.getElementById("transition-image").style.transform = "scale(1)";

}

function loadMainPhotos(){ 
	const listItems = document.querySelectorAll('#transition-image');
	let len = listItems.length;
	for (let i = 1; i < listItems.length; i++){
		listItems[i].setAttribute("id", "transition-image");
		listItems[i - 1].setAttribute("id", "");
	}
}



function nextImage(val) {
	const listItems = document.querySelectorAll('img');
	let len = listItems.length;
	const listImages = [];
	let currentImage = document.getElementById("lightbox-image").src;
	for (let i = 0; i < len; i++){
		listImages.push(listItems[i].src);
	}

	
	
	if (document.getElementById("lightbox-image").classList.contains("fadeIn")){
		document.getElementById("lightbox-image").classList.remove("fadeIn");
		document.getElementById("lightbox-image").classList.add("fadeOut");
	}
	else {

		document.getElementById("lightbox-image").classList.remove("fadeOut");
		document.getElementById("lightbox-image").classList.add("fadeIn");
		}
	
	for (let i = 0; i < listImages.length -1; i++){
		
		if (listImages[i] === currentImage){
			if (i===0 && val===-1) {
				i = i;
			}
			else {
				document.getElementById("lightbox-image").src=listImages[i+val];
			}
		
		}
	}
	
	
	
	
}

function hideNav(event){
	var y = event.deltaY;
	if (document.getElementById("lightbox").style.display==="flex"){
		document.getElementById("nav").style.marginTop = "0px";
	}
	else {
	if (y >= 0){
		document.getElementById("nav").style.marginTop = "-75px";
	}
	else {
		document.getElementById("nav").style.marginTop = "0px";
	}
	}
}