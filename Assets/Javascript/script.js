
/*Background-header*/
function scrollHeader(){
    const header=document.getElementById("header");
    //when scroll is greater than 50%of VH
    if(this.scrollY >= 50){
        header.classList.add("scroll-header")
    }
}

window.addEventListener("scroll",scrollHeader);

let slides=document.getElementsByClassName("cert");

/*certificate buttons*/
function certMovePrev(){
    let activeSlide;let len;
    let slideLen=slides.length;
    for(i in slides){
        len=slides[i].classList.length;
        if( len >1){activeSlide=Number(i);break;}
        
    }
    if(activeSlide===(slideLen-1)){document.getElementById("cert_btn_next").classList.remove("cert_btn_disabled");}
    if(activeSlide===(1)){document.getElementById("cert_btn_prev").classList.add("cert_btn_disabled");}
    if(!(activeSlide==0))
    {slides[activeSlide].classList.remove("cert_active");slides[(activeSlide-1)].classList.add("cert_active")}
    
    
}

function certMoveNext(){
    let activeSlide;let len;
    let slideLen=slides.length;
    for(i in slides){
        len=slides[i].classList.length;
        if( len >1){activeSlide=Number(i);break;}
        
    }
    if(activeSlide===0){document.getElementById("cert_btn_prev").classList.remove("cert_btn_disabled");}
    if(activeSlide===(slideLen-2)){document.getElementById("cert_btn_next").classList.add("cert_btn_disabled");}
    if(!(activeSlide==(slideLen-1)))
    {slides[activeSlide].classList.remove("cert_active"); slides[(activeSlide+1)].classList.add("cert_active")}
   
    
}

