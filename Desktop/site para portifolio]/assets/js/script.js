var slideItem = 0;
window.onload = function() {
    setInterval(passarSlide, 2000); 
    
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName(slide);
    for(var i=0; <objs.length;i++) {
        objs[i].style.width = slidewidth+"px";
    }
function passarSlide() {
    var slidewidth = document.getElementById("slideshow").offsetWidth;

    if(slideItem>= 3) {
        slideItem = 0;
    } else {
            slideItem++;
    }

    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"

    }
}    
    
}