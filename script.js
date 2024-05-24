var links=[document.getElementById("WhoRU_link"),document.getElementById("MyLog_link"),document.getElementById("MyGoal_link"),document.getElementById("Hobbies_link"),document.getElementById("ContactMe_link")];
var pages=[document.getElementById("WhoRU"),document.getElementById("MyLog"),document.getElementById("MyGoal"),document.getElementById("Hobbies"),document.getElementById("ContactMe")]
var homeBtn=document.getElementById("home_btn");
var bottom=document.getElementById("bottom")
var menuSelected=false;


links[0].addEventListener("click",()=>{
    menuSelected=true;
    document.querySelector("#home_btn p").innerText="🏠";
    for(var i=0;i<pages.length;i++){
      
        if(i==0){
            
            pages[i].style.display='';
           
            document.body.style.height='100vh';
           
        }
        else{
            pages[i].style.display='none';
        }
    }
    
});
links[1].addEventListener("click",()=>{
    menuSelected=true;
    document.querySelector("#home_btn p").innerText="🏠";
    for(var i=0;i<pages.length;i++){
      
        if(i==1){
            pages[i].style.display='';
            document.body.style.height='100vh';
        }
        else{
            pages[i].style.display='none';
        }
    }
    
});
links[2].addEventListener("click",()=>{
    menuSelected=true;
    document.querySelector("#home_btn p").innerText="🏠";
    for(var i=0;i<pages.length;i++){
      
        if(i==2){
            pages[i].style.display='';
            document.body.style.height='100vh';
        }
        else{
            pages[i].style.display='none';
        }
    }
  
});
links[3].addEventListener("click",()=>{
    menuSelected=true;
    document.querySelector("#home_btn p").innerText="🏠";
    for(var i=0;i<pages.length;i++){
      
        if(i==3){
            pages[i].style.display='';
            document.body.style.height='100vh';
        }
        else{
            pages[i].style.display='none';
        }
    }
 
});
links[4].addEventListener("click",()=>{
    menuSelected=true;
    document.querySelector("#home_btn p").innerText="🏠";
    for(var i=0;i<pages.length;i++){
      
        if(i==4){
            pages[i].style.display='';
            document.body.style.height='100vh';
        }
        else{
            pages[i].style.display='none';
        }
    }

});
homeBtn.addEventListener("click",(event)=>{
    menuSelected=false;
    for(var i=0;i<pages.length;i++) pages[i].style.display='';
    if(!menuSelected){
        document.querySelector("#home_btn p").innerText="🔝"
        window.scrollTo(0,0);
    }
    document.body.style.height='auto';
})

//첫 화면
pages[0].style.animation="fadein 1s ease-in"

window.addEventListener("scroll",()=>{
    var value=window.scrollY;
    console.log(value,menuSelected);
    if(menuSelected!=true){
        if(value<=600){
            pages[0].style.animation="fadein 1s ease-in"
            pages[0].style.opacity="1";
            pages[1].style.opacity="0";
            pages[1].style.transition="1s ease-out"
        }
        else if(value>600&&value<=1400){
            pages[1].style.animation="fadein 1s ease-in"
            pages[1].style.opacity="1";
            pages[0].style.opacity="0";
            pages[0].style.transition="1s ease-out"
            pages[2].style.opacity="0";
            pages[2].style.transition="1s ease-out"
        }
        else if(value>1400&&value<=2000){
            pages[2].style.animation="fadein 1s ease-in"
            pages[2].style.opacity="1";
            pages[1].style.opacity="0";
            pages[1].style.transition="1s ease-out"
            pages[3].style.opacity="0";
            pages[3].style.transition="1s ease-out"
        }
        else if(value>2000&&value<=2600){
            pages[3].style.animation="fadein 1s ease-in"
            pages[3].style.opacity="1";
            pages[2].style.opacity="0";
            pages[2].style.transition="1s ease-out"
            pages[4].style.opacity="0";
            pages[4].style.transition="1s ease-out"
        }
        else if(value>2600&&value<=4000){
            pages[4].style.animation="fadein 1s ease-in"
            pages[4].style.opacity="1";
            pages[3].style.opacity="0";
            pages[3].style.transition="1s ease-out"
           
        }
    }else{
        pages[0].style.opacity="1";
        pages[1].style.opacity="1";
        pages[2].style.opacity="1";
        pages[3].style.opacity="1";
        pages[4].style.opacity="1";
        pages[0].style.animation="fadein 1s ease-in"
        pages[1].style.animation="fadein 1s ease-in"
        pages[2].style.animation="fadein 1s ease-in"
        pages[3].style.animation="fadein 1s ease-in"
        pages[4].style.animation="fadein 1s ease-in"
    }
    
   
    
    
    
    
    
    
    // if(value<600){
    //     pages[0].style.animation="fadein 1s ease-in";
    //     pages[1].style.animation="fadeout 1s ease-out";
    //     pages[1].style.opacity="0"
    // }
    // else if(value>=200&&value<600){
    //     pages[1].style.animation="fadein 1s ease-in";
        
    // }
    // else if(value>=600&&value<1400){
    //     pages[0].style.animation="fadeout 1s ease-out"
    //     pages[0].style.opacity="0"
    // }
    // else if(value>=1400&&value<2200){
    //     pages[2].style.animation="fadein 1s ease-in";
    //     pages[1].style.animation="fadeout 1s ease-out"
    // }
})