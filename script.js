const btn1 = document.querySelector("#qst1");
const btn2 = document.querySelector("#qst2");
const btn3 = document.querySelector("#qst3");
const btn4 = document.querySelector("#qst4");
const btn5 = document.querySelector("#qst5");
const btn6 = document.querySelector("#qst6");
let list = document.querySelectorAll(".question");


btn1.addEventListener("click", destroy);
btn2.addEventListener("click", destroy);
btn3.addEventListener("click", destroy);
btn4.addEventListener("click", destroy);
btn5.addEventListener("click", destroy);
btn6.addEventListener("click", destroy);

function destroy(){
    list.forEach(answer => {
        if(answer.lastElementChild.style.display == "block" && answer.firstElementChild != this){
            answer.firstElementChild.lastElementChild.style.transform = "translateY(-50%) rotate(-45deg)";
            answer.lastElementChild.style.display = "none";
        }
    });
    let element = this.nextElementSibling;
    if (element.style.display == "none"){
        this.lastElementChild.style.transform = "translateY(-50%) rotate(0deg)";
        element.style.display = "block";
    }else{
        this.lastElementChild.style.transform = "translateY(-50%) rotate(-45deg)";
        element.style.display = "none";
    }
}
