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

function strength() {
    let a = document.getElementById('skillPlaceholder4');

    if (a.style.visibility === 'visible') {
        a.style.visibility = 'hidden';
        document.getElementById('skillsTitle').innerHTML = "Skills";
    } else {
        a.style.visibility = 'visible';
        document.getElementById("skillsTitle").innerHTML = "Skills : Strength";
    }
}

function dexterity() {
    let a = document.getElementById('skillPlaceholder1');
    let b = document.getElementById('skillPlaceholder16');
    let c = document.getElementById('skillPlaceholder17');
    let d = document.getElementById('dexterityToggle');

    if (a.style.visibility === 'visible') {
        a.style.visibility = 'hidden';
        document.getElementById('skillsTitle').innerHTML = "Skills";
    } else {
        a.style.visibility = 'visible';
        document.getElementById("skillsTitle").innerHTML = "Skills : Dexterity";
    }

    if (b.style.visibility === 'visible') {
        b.style.visibility = 'hidden';
    } else {
        b.style.visibility = 'visible';
    }

    if (c.style.visibility === 'visible') {
        c.style.visibility = 'hidden';
    } else {
        c.style.visibility = 'visible';
    }

    if (d.style.visibility === 'visible') {
        d.style.visibility = 'hidden';
    } else {
        d.style.visibility = 'visible';
    }
}

function constitution() {
    let a = document.getElementById('skillPlaceholder19');

    if (a.style.visibility === 'visible') {
        a.style.visibility = 'hidden';
        document.getElementById('skillsTitle').innerHTML = "Skills";
    } else {
        a.style.visibility = 'visible';
        document.getElementById("skillsTitle").innerHTML = "Skills : Constitution";
    }
}

function intelligence() {
    let a = document.getElementById('skillPlaceholder3');
    let b = document.getElementById('skillPlaceholder6');
    let c = document.getElementById('skillPlaceholder9');
    let d = document.getElementById('skillPlaceholder11');
    let e = document.getElementById('skillPlaceholder15');


    if (a.style.visibility === 'visible') {
        a.style.visibility = 'hidden';
        document.getElementById('skillsTitle').innerHTML = "Skills";
    } else {
        a.style.visibility = 'visible';
        document.getElementById('skillsTitle').innerHTML = "Skills : Intelligence";
    }

    if (b.style.visibility === 'visible') {
        b.style.visibility = 'hidden';
    } else {
        b.style.visibility = 'visible';
    }

    if (c.style.visibility === 'visible') {
        c.style.visibility = 'hidden';
    } else {
        c.style.visibility = 'visible';
    }

    if (d.style.visibility === 'visible') {
        d.style.visibility = 'hidden';
    } else {
        d.style.visibility = 'visible';
    }

    if (e.style.visibility === 'visible') {
        e.style.visibility = 'hidden';
    } else {
        e.style.visibility = 'visible';
    }
}

function wisdom() {
    let a = document.getElementById('skillPlaceholder2');
    let b = document.getElementById('skillPlaceholder7');
    let c = document.getElementById('skillPlaceholder10');
    let d = document.getElementById('skillPlaceholder12');
    let e = document.getElementById('skillPlaceholder18');

    if (a.style.visibility === 'visible') {
        a.style.visibility = 'hidden';
        document.getElementById('skillsTitle').innerHTML = "Skills";
    } else {
        a.style.visibility = 'visible';
        document.getElementById('skillsTitle').innerHTML = "Skills : Wisdom";
    }

    if (b.style.visibility === 'visible') {
        b.style.visibility = 'hidden';
    } else {
        b.style.visibility = 'visible';
    }

    if (c.style.visibility === 'visible') {
        c.style.visibility = 'hidden';
    } else {
        c.style.visibility = 'visible';
    }

    if (d.style.visibility === 'visible') {
        d.style.visibility = 'hidden';
    } else {
        d.style.visibility = 'visible';
    }

    if (e.style.visibility === 'visible') {
        e.style.visibility = 'hidden';
    } else {
        e.style.visibility = 'visible';
    }
}

function charisma() {
    let a = document.getElementById('skillPlaceholder5');
    let b = document.getElementById('skillPlaceholder8');
    let c = document.getElementById('skillPlaceholder13');

    if (a.style.visibility === 'visible') {
        a.style.visibility = 'hidden';
        document.getElementById('skillsTitle').innerHTML = "Skills";
    } else {
        a.style.visibility = 'visible';
        document.getElementById('skillsTitle').innerHTML = "Skills : Charisma";
    }

    if (b.style.visibility === 'visible') {
        b.style.visibility = 'hidden';
    } else {
        b.style.visibility = 'visible';
    }

    if (c.style.visibility === 'visible') {
        c.style.visibility = 'hidden';
    } else {
        c.style.visibility = 'visible';
    }
}

function clear(){
    var x = document.getElementById("skills");

    if (x.style.visibility === 'visible') {
        x.style.visibility = 'hidden';
    }
}