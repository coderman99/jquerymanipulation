document.addEventListener("DOMContentLoaded", function () {
    // Objective 1

    let button = document.createElement("button");
    let btnText = document.createTextNode("Click Me");
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.style.position = "absolute";
    button.style.marginTop = "50px";


    button.addEventListener("click", btn);
    function btn() {
        alert("Hi there!");
    }
    // Objective 2
    let thisBtn = document.getElementById("btnText");
    thisBtn.addEventListener("click", addText);
    function addText() {
        let txtBox = document.getElementById("text");
        alert(txtBox.value);
    }
    // Objective 3

    let div1 = document.getElementById("box");
    div1.addEventListener("mouseenter", mouseOver);
    function mouseOver() {
        let color = "black";
        div1.style.background = color;
    }
    div1.addEventListener("mouseleave", mouseOut);
    function mouseOut() {
        div1.style.background = "red";
    }

    // Objective 4

    let par = document.getElementById("para");
    par.style.position = "absolute";
    par.style.marginTop = "525px";
    par.addEventListener("click", colorMe);
    function colorMe() {
        let colors = ["red", "yellow", "blue", "orange", "green"];
        par.style.color = colors[Math.floor(Math.random() * colors.length)];
    }

    // Objective 5

    let nameBtn = document.createElement("button");
    let nameBtnText = document.createTextNode("Click for Name!");
    nameBtn.appendChild(nameBtnText);
    document.body.appendChild(nameBtn);
    nameBtn.style.position = "absolute";
    nameBtn.style.marginTop = "550px";
    let emptyDiv = document.createElement("div");
    document.body.appendChild(emptyDiv);
    emptyDiv.style.position = "absolute";
    emptyDiv.style.marginTop = "600px";
    emptyDiv.style.borderColor = "yellow";
    emptyDiv.style.height = "80px";
    emptyDiv.style.width = "80px";

    nameBtn.addEventListener("click", myName);
    function myName() {
        let nameSpan = document.createElement("span");
        let spanTxt = document.createTextNode("Edward Hart");
        nameSpan.appendChild(spanTxt);
        emptyDiv.appendChild(nameSpan);
    }

    // Objective 6

    let bt = document.getElementById("getUl");
    let uL = document.getElementById("makeLi");
    bt.style.position = "absolute";
    bt.style.marginTop = "740px";
    uL.style.position = "absolute";
    uL.style.marginTop = "760px";
    bt.addEventListener("click", addLi);
    function addLi() {
        let friends = ["Scott", "Cameron", "Ed", "Seminole", "Karen", "Herbert", "Pester", "Typer", "Riley", "Quizzer"];
        for(i = 0; i < friends.length; i ++){
            let li = document.createElement("li");
           let list = document.createTextNode(friends[i]);
           li.appendChild(list);
            uL.appendChild(li);
        }   
    }
});