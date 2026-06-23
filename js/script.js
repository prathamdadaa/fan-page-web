

let mode = document.getElementById("mode");


mode.onclick = ()=>{


document.body.classList.toggle("light");


if(document.body.classList.contains("light")){


document.body.style.background="#ffffff";

document.body.style.color="#000";

mode.innerHTML="☀ Light Mode";

}


else{


document.body.style.background="#111";

document.body.style.color="#fff";

mode.innerHTML="🌙 Dark Mode";

}


};



document.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",e=>{


e.preventDefault();


document.querySelector(

link.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});


});


});



window.addEventListener("load",()=>{


console.log("Welcome to Pratham Dada Fan Zone");


});
