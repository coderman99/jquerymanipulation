$(document).ready();

// Objective 1

let btn0 = $("<button></button>").text("Click Me!");
$("body").append(btn0);
$(btn0).click(function () {
    alert("Hi there JQuery!");
});

// Objective 2

let btn1 = $("#btnText");
$(btn1).click(function () {
    let txt0 = $("#text").val();
    alert(txt0);
});

// Objective 3

let div0 = $("#box");
$(div0).mouseenter(function () {
    $(div0).css("background-color", "black");
});

$(div0).mouseleave(function () {
    $(div0).css("background-color", "red");
});

// Objective 4

let par0 = $("#para");
$(par0).css({ "position": "absolute", "margin-top": "525px" });
$(par0).click(function () {
    let colors = ["red", "yellow", "green", "blue", "orange"];
    $(par0).css("color", colors[Math.floor(Math.random() * colors.length)]);
});

// Objective 5


let btn2 = $("<button></button>").text("Click for Name!");
$(btn2).css({ "position": "absolute", "margin-top": "550px" });
$("body").append(btn2);
let div1 = $("<div></div>");
$(div1).css({ "position": "absolute", "margin-top": "600px" });
$("body").append(div1);
$(btn2).click(function () {
    let span0 = $("<span></span>").text("Edward Hart");
    $(div1).append(span0);
});

// Objective 6

let bt = $("#getUl");
let uL = $("#makeLi");
$(bt).css({ "position": "absolute", "margin-top": "740px" });
$(uL).css({ "position": "absolute", "margin-top": "760px" });
$(bt).click(function () {
    let friends = ["Scott", "Cameron", "Ed", "Seminole", "Karen", "Herbert", "Pester", "Typer", "Riley", "Quizzer"];
    for (i = 0; i < friends.length; i++) {
        let li = $("<li></li>").text(friends[i]);
        $(uL).append(li);
    }
});
