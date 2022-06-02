const win = new Audio("win.mp3");
const loose = new Audio('loose.mp3');
const retry=new Audio('retry.mp3');
var size=document.querySelectorAll("button").length;
var i,selected=0;
for(i=0;i<size;i++)
{
   $("button")[i].addEventListener("click",function (){
        selected=this.innerHTML;
        document.querySelector(".variable_value").innerHTML=selected;
    }
    );
}
function main()
{
    var random;
    random=Math.floor(Math.random()*6)+1;
    var string="dice"+random+".png";
    document.querySelector("img").src=string;
    if(selected==0)
    {
        retry.play();
        document.querySelector("#result").innerHTML="'you didnt entered the number'";
        document.querySelectorAll("button")[random-1].setAttribute("class","right");
        setTimeout(() => {
            document.querySelector("#result").innerHTML="' '";
            document.querySelectorAll("button")[random-1].classList.remove("right");
            document.querySelector("img").src="dice6.png";
        }, 2000);
        return;
    }
    if(random==selected)
    {
        win.play();
        var n=document.querySelector(".score_value").innerHTML;
        var score=parseInt(n);
        score++;
        document.querySelector(".score_value").innerHTML=score;
        document.querySelector("#result").innerHTML="'your guess was right'";
        document.querySelectorAll("button")[selected-1].setAttribute("class","right");
        setTimeout(() => {
            document.querySelector("#result").innerHTML="' '";
            document.querySelectorAll("button")[selected-1].classList.remove("right");
            selected=0;
            document.querySelector(".variable_value").innerHTML=selected;
            document.querySelector("img").src="dice6.png";
        }, 2000);
        return;
    } 
    else
    { 
        loose.play();
        document.querySelector("#result").innerHTML="'your guess was wrong,better luck next time'";
        document.querySelectorAll("button")[selected-1].setAttribute("class","wrong");
        document.querySelectorAll("button")[random-1].setAttribute("class","right");
        setTimeout(() => {
            document.querySelector("#result").innerHTML="' '";
            document.querySelectorAll("button")[selected-1].classList.remove("wrong");
            document.querySelectorAll("button")[random-1].classList.remove("right");
            selected=0;
            document.querySelector(".variable_value").innerHTML=selected;
            document.querySelector("img").src="dice6.png";
        }, 2000);
        return;
    }
}
var count=10;
setInterval(() => {
    if(count>=0)
    { 
        document.querySelector(".timer").innerHTML=count;
    count--;
    }    
    if(count==-1)
    {
        main();
        count=-2;
        setTimeout(() => {
            count=10; 
        }, 2000);
    }
},1000);
document.querySelectorAll("li")[0].addEventListener("click",function ()
{
       document.location.reload();
});

document.querySelectorAll("li")[1].addEventListener("click",function ()
{
        count=-10;
        alert("your score is "+document.querySelector(".score_value").innerHTML);
        document.querySelector(".timer").innerHTML=0;
});

