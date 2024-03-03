  //lightbox for images
  function imgLightbox(picture){// loop through all images in mediasection, add event listener to each
    picture.addEventListener("click",()=>{
      //on image click, add active class to lightbox
      lightbox.classList.add("active");
      //create img element, set src to clicked image
      const img=document.createElement("img");
      img.src=picture.src;
      //if lightbox has child, remove it,so no double images
      while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
      }
      //append img to display to lightbox
      lightbox.appendChild(img);
    })
  }
  