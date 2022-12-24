let page=1;
visibilityOfGoBackBtn();   
$(".content").load("/page1.html");

const btnAll= document.querySelectorAll("button");

for(let k=0;k<btnAll.length;k++)
btnAll[k].addEventListener("click",(e)=>{


switch(e.target.id){
    
    
        case "menu1":
            $(".content").load("/page1.html");
            page=1;break;
        case "menu2": 
        
        $(".content").load("/page2.html");page=2;break;
        case "menu3": 
      
        $(".content").load("/page3.html");page=3;break;
        case "menu4": 
       
        $(".content").load("/page4.html");page=4;break;
        default:
        console.log("id="+e.target);
    }
    visibilityOfGoBackBtn();   
});
//clone of footer to the leftside
const div = document.getElementById('f');
const clone = div.cloneNode(true);
clone.id = "f2";
document.querySelector("#cfooter").appendChild(clone);


   

function  visibilityOfGoBackBtn(){
if(page>1)
document.querySelector(".gobackBtn").style.visibility='visible';   
    else
document.querySelector(".gobackBtn").style.visibility='hidden'; 
}





function nextBtn(){
    //document.querySelector(`.menu${page}`).classList.remove("activebtn");
    page++;

    $(".content").load(`./page${page}.html`);
    //document.querySelector(`.menu${page}`).classList.add("activebtn");
    visibilityOfGoBackBtn();
   

}

function backBtn(){
 // document.querySelector(`.menu${page}`).classList.remove("activebtn");
    page--;
    $(".content").load(`./page${page}.html`);
  // document.querySelector(`.menu${page}`).classList.add("activebtn");
   visibilityOfGoBackBtn();
}