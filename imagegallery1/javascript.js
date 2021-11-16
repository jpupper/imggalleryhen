var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var images = $(".mySlides img").toArray();
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
    var ilist = document.images;

  //console.log("index"+slideIndex);
  var w = ilist[slideIndex-1].width;
  var h = ilist[slideIndex-1].height;


  console.log("W:"+w);
  
  console.log("H:"+h);
  if(w > h){
	    ilist[slideIndex-1].style.width = "100%";
		ilist[slideIndex-1].style.height = "auto";
		console.log("MAYOR ANCHO");
  }else{
	    ilist[slideIndex-1].style.width = "auto";
		ilist[slideIndex-1].style.height = "100%";
		console.log("MAYOR ALTO");
  }
  

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}