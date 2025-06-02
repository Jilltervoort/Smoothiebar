const img = document.querySelector("#barDrankje")
const hoogKnop = document.querySelector("#glasHoog")
const bekerKnop = document.querySelector("#glasBeker")
const voetKnop = document.querySelector("#glasVoet")

const aardbeiKnop = document.querySelector("#keuzeAardbei")
const mangoKnop = document.querySelector("#keuzeMango")
const kersKnop = document.querySelector("#keuzeKers")

const banaanKnop = document.querySelector("#keuzeBanaan")
const kiwiKnop = document.querySelector("#keuzeKiwi")
const bosbesKnop = document.querySelector("#keuzeBosbes")

const rietjeKnop = document.querySelector("#keuzeRietje")

const budgetElement = document.querySelector("#budgetBedrag")
const aanvullenKnop = document.querySelector("#aanvullen")
const afkeurGeluid = new Audio('sounds/budgetOp.wav');
const berichtElement = document.querySelector("#bericht");

const klaarKnop = document.querySelector("#klaarKnop");
const klaarGeluid = new Audio('sounds/klaar.wav');

const prijzen = {
    hoog: 3,
    beker: 3.5,
    voet: 4,
    aardbei: 1.25,
    mango: 1.5,
    kers: 2,
    banaan: 1.5,
    kiwi: 1.75,
    bosbes: 2.25,
    rietje: 0.5
};

let huidigGlas = ""
let ingredient1 = ""
let ingredient2 = ""
let rietje = ""

let budget = 6.50;

// Bron: chatGPT
// prompt: Schrijf de code voor mij dat wanneer het budget 1 euro is of lager, dat dan de tekstkleur rood wordt.

function updateBudget() {
    budgetElement.textContent = "€" + budget.toFixed(2);

    if (budget <= 1) {
        budgetElement.classList.add("roodBudget");
    } else {
        budgetElement.classList.remove("roodBudget");
    }
}
//

// Bron: chatGPT
// prompt: waar ik voor wil zorgen is dat wanneer de speler een keuze wilt maken uit een van de opties, maar het budget niet meer genoeg is, dat dat niet kan.
// wat ik wil gaan toevoegen is dat wanneer je niet genoeg budget hebt en je alsnog een keuze probeert te maken, dat dan een afkeurend geluidje klinkt wat je eraan herinnerd dat je budget op is.

function probeerAankoop(prijs, actie) {
    if (budget >= prijs) {
        budget -= prijs;
        updateBudget();
        actie();
    } else {
        afkeurGeluid.play();
        berichtElement.textContent = "let op! Je hebt niet genoeg budget voor deze keuze!";
    }
}
// 

function budgetAanvullen() {
    budget += 0.25;
    budgetElement.textContent = "€" + budget.toFixed(2);
    berichtElement.textContent = "";
    updateBudget();
}

function veranderSmoothie() {
    img.src = "images/smoothies/" + huidigGlas + ingredient1 + ingredient2 + rietje + ".png";
}

function eindBerichtTonen() {
    berichtElement.textContent = "Dat ziet er goed uit! Geniet van je heerlijke smoothie!"
    klaarGeluid.play();
}


hoogKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.hoog, () => {
        huidigGlas = "hoog";
        veranderSmoothie();
    });
});
bekerKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.beker, () => {
        huidigGlas = "beker";
        veranderSmoothie();
    });
});
voetKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.voet, () => {
        huidigGlas = "voet";
        veranderSmoothie();
    });
});

aardbeiKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.aardbei, () => {
        ingredient1 = "Aardbei";
        veranderSmoothie();
    });
});
mangoKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.mango, () => {
        ingredient1 = "Mango";
        veranderSmoothie();
    });
});
kersKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.kers, () => {
        ingredient1 = "Kers";
        veranderSmoothie();
    });
});

banaanKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.banaan, () => {
        ingredient2 = "Banaan";
        veranderSmoothie();
    });
});
kiwiKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.kiwi, () => {
        ingredient2 = "Kiwi";
        veranderSmoothie();
    });
});
bosbesKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.bosbes, () => {
        ingredient2 = "Bosbes";
        veranderSmoothie();
    });
});

rietjeKnop.addEventListener('click', () => {
    probeerAankoop(prijzen.rietje, () => {
        rietje = "Rietje";
        veranderSmoothie();
    });
});


aanvullenKnop.addEventListener('click', budgetAanvullen);

klaarKnop.addEventListener('click', eindBerichtTonen);

updateBudget();