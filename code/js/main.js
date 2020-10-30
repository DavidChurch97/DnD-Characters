function backCharacter() {
    if (document.getElementById("newCharacterIcon").src = "img/haapi.jpg") {
        document.getElementById("newCharacterIcon").src = "img/newCharacterIcon.png";
        document.getElementById("characterHeading").innerHTML = "Create New";
    } 
}

function nextCharacter() {
    if (document.getElementById("newCharacterIcon").src = "img/newCharacterIcon.png") {
        document.getElementById("newCharacterIcon").src = "img/haapi.jpg";
        document.getElementById("characterHeading").innerHTML = "Haapi <br> Level 4 <br> EXP 2,700 / 6500 <br> Human Witch";
    }  else {
        backCharacter();
    }
}

function changeLink() {
    

    console.log("clicked")
}