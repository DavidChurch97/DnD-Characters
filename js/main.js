function backCharacter() {
    if (document.getElementById("newCharacterIcon").src = "img/haapi.jpg") {
        document.getElementById("newCharacterIcon").src = "img/newCharacterIcon.png";
        document.getElementById("characterHeading").innerHTML = "Create <br> New <br> Character";
        document.getElementById('characterLink').setAttribute('href', 'create.html');
    } 
}

function nextCharacter() {
    if (document.getElementById("newCharacterIcon").src = "img/newCharacterIcon.png") {
        document.getElementById("newCharacterIcon").src = "img/haapi.jpg";
        document.getElementById("characterHeading").innerHTML = "Haapi <br> Level 4 <br> EXP 2,700 / 6500 <br> Human Witch";
        document.getElementById('characterLink').setAttribute('href', 'haapi.html');
    }  
}

