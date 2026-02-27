const body = document.getElementById("body");
const birthdayWarning = document.getElementById("birthday-warning");
const birthdayTest = document.getElementById("birthday-test");
const questionTest = document.getElementById("question-test");
const answerTest = document.getElementById("answer-test");
const birthdayAnticipation = document.getElementById("birthday-anticipation");
const anticipationText = document.getElementById("anticipation-text");
const birthdayGift = document.getElementById("birthday-gift");
const firstGift = document.getElementById("first-gift");
const secondGift = document.getElementById("second-gift");
const birthdayChoice = document.getElementById("birthday-choice");
const text = document.getElementById("text");
const errorContainer = document.getElementById("error-container");
const errorText = document.getElementById("error-text");
const birthdayEnd = document.getElementById("birthday-end");
const firstEndText = document.getElementById("first-end-text");
const secondEndText = document.getElementById("second-end-text");
const thirdEndText = document.getElementById("third-end-text");
const form = document.getElementById("form");
const birthdaySubmit = document.getElementById("birthday-submit");
const submitText = document.getElementById("submit-text");
const birthdayAdvice = document.getElementById("birthday-advice");
const birthdayPresent = document.getElementById("birthday-present");
const flameIcon = document.getElementById("flame-icon");
const birthdaySpecial = document.getElementById("birthday-special");
const fakeSpecial = document.getElementById("fake-special");
const firstFake = document.getElementById("first-fake");
const secondFake = document.getElementById("second-fake");
const thirdFake = document.getElementById("third-fake");
const realSpecial = document.getElementById("real-special");
const realText = document.getElementById("real-text");
const birthdayWin = document.getElementById("birthday-win");
const birthdayGoodbye = document.getElementById("birthday-goodbye");
const littleFlame = document.getElementById("little-flame");
const birthdayMessage = document.getElementById("birthday-message");

setTimeout(() => {
    birthdayWarning.style.display = "flex";
    setTimeout(() => {
        birthdayWarning.style.animation = "hideMessage 2s linear forwards";
    }, 4000);
}, 4000);

setTimeout(() => {
    birthdayTest.style.display = "block";
    setTimeout(() => {
        questionTest.style.display = "flex";
        setTimeout(() => {
            answerTest.style.display = "flex";
        }, 2000);
    }, 2000);
}, 2000);

function showGift() {
    body.style.animation = "yesBackground 3s infinite linear";
    birthdayTest.style.display = "none";
    birthdayAnticipation.style.display = "flex";
    setTimeout(() => {
        animateFirstHalft();
        setTimeout(() => {
            anticipationText.textContent = "";
            setTimeout(() => {
                animateSecondHalf();
                setTimeout(() => {
                    birthdayAnticipation.style.display = "none";
                    birthdayGift.style.display = "flex";
                    setTimeout(() => {
                        firstGift.style.display = "flex";
                        setTimeout(() => {
                            firstGift.style.display = "none";
                            secondGift.style.display = "flex";
                            setTimeout(() => {
                                birthdayGift.style.animation = "hideMessage 2s linear forwards";
                                setTimeout(() => {
                                    birthdayGift.style.display = "none";
                                    birthdayChoice.style.display = "flex";
                                }, 3000);
                            }, 10000);
                        }, 10000);
                    }, 1000);
                }, 3000);
            }, 1000);
        }, 4000);
    }, 1000);
}

const firstHalf = "Ecco il tuo regalo...";
const secondHalf = "da parte mia.";

function animateFirstHalft() {
    if (typing) {
        if (i < firstHalf.length) {
            anticipationText.textContent += firstHalf.charAt(i);
            i++;
            setTimeout(animateFirstHalft, 150);
        }
        else {
            typing = false;
            setTimeout(animateFirstHalft, 2000);
        }
    }
}

let j = -1;

function animateSecondHalf() {
    if (j < secondHalf.length) {
        anticipationText.textContent += secondHalf.charAt(j);
        j++;
        setTimeout(animateSecondHalf, 150);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!checkText()) return;

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    birthdayChoice.style.display = "none";
    birthdaySubmit.style.display = "flex";
    submitText.innerHTML = "Aspetta un attimo...";

    try {
        const response = await fetch("https://formspree.io/f/mwpqjjpy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        });

        if (response.ok) {
            submitText.textContent = "Invio completato";
            form.reset();
        } else {
            submitText.textContent = "Invio fallito";
        }

    } catch (error) {
        submitText.textContent = "Qualcosa è andato storto!";
    }

    setTimeout(() => {
        birthdaySubmit.style.display = "none";
        setTimeout(() => {
            birthdayPresent.style.display = "flex";
            birthdayAdvice.style.display = "flex";
            sendHint();
            setTimeout(() => {
                birthdayAdvice.style.animation = "hideMessage 2s linear forwards";
            }, 5000);
        }, 1000);
    }, 1000);
});

function sendHint() {
    console.log("Clicca sull'icona della fiamma 19 volte per il regalo speciale.")
}

let counter = 0;

flameIcon.addEventListener("click", () => {
    counter++;
    if (counter === 19) {
        birthdayPresent.style.display = "none";
        setTimeout(() => {
            birthdaySpecial.style.display = "flex";
            setTimeout(() => {
                secondFake.style.display = "block";
                setTimeout(() => {
                    thirdFake.style.display = "block";
                    setTimeout(() => {
                        fakeSpecial.style.display = "none";
                        setTimeout(() => {
                            realSpecial.style.display = "flex";
                            setTimeout(() => {
                                realText.style.display = "block";
                                setTimeout(() => {
                                    birthdaySpecial.style.display = "none";
                                    setTimeout(() => {
                                        birthdayWin.style.display = "flex";
                                    }, 1500);
                                }, 5000);
                            }, 1500);
                        }, 1000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
});

function randomText() {
    const tryAgain = [
        "Bel tentativo ma devi scrivere qualcosa.",
        "Scrivi qualcosa, anche solo una lettera.",
        "Se non scrivi nulla non posso aiutarti.",
        "Mmm… serve almeno un piccolo sforzo.",
        "Il silenzio non è una risposta valida.",

    ]
    return tryAgain[Math.floor(Math.random() * tryAgain.length)];
}

function checkText() {
    if (text.value === "") {
        errorContainer.style.display = "block";
        errorText.textContent = randomText();
        return false;
    }
    errorContainer.style.display = "none";
    return true;
}

const flameName = "Fiammetta";
let i = -1;
let typing = true;

function animateName() {
    if (typing) {
        if (i < flameName.length) {
            littleFlame.textContent += flameName.charAt(i);
            i++;
            setTimeout(animateName, 250);
        }
        else {
            typing = false;
            setTimeout(animateName, 2000);
        }
    }
}

const firstEndMessage = "E niente, questo è il tuo regalo e, se non hai capito che cos'è, non è solo il sito ma anche le mie parole sincere.";
let x = -1;
let type = true;

function animateFirstEnd() {
    if (type) {
        if (x < firstEndMessage.length) {
            firstEndText.textContent +=firstEndMessage.charAt(x);
            x++;
            setTimeout(animateFirstEnd, 100);
        }
        else {
            type = false;
            setTimeout(animateFirstEnd, 2000);
        }
    }
}

const secondEndMessage = "È troppo strano il fatto che ci guardiamo ma non ci parliamo, e questo deve cambiare, ovviamente solo quando vuoi tu... Spero che ti sia piaciuto. Ci vediamo... e magari un giorno ti saluterò :)"
let y = -1;
let typo = true;

function animateSecondEnd() {
    if (typo) {
        if (y < secondEndMessage.length) {
            secondEndText.textContent +=secondEndMessage.charAt(y);
            y++;
            setTimeout(animateSecondEnd, 100);
        }
        else {
            typo = false;
            setTimeout(animateSecondEnd, 2000);
        }
    }
}

function goToEnd() {
    birthdayChoice.style.display = "none";
    birthdayEnd.style.display = "flex";
    setTimeout(() => {
        animateFirstEnd();
        setTimeout(() => {
            firstEndText.style.display = "none";
            secondEndText.style.display = "block";
            animateSecondEnd();
            setTimeout(() => {
                secondEndText.style.display = "none";
                thirdEndText.style.display = "block";
            }, 23000);
        }, 16000);
    }, 1000);
}

function hideGift() {
    body.style.animation = "noBackground 3s infinite linear";
    birthdayTest.style.display = "none";
    setTimeout(() => {
        birthdayGoodbye.style.display = "block";
        animateName();
        setTimeout(() => {
            birthdayMessage.style.display = "block";
            setTimeout(() => {
                birthdayMessage.style.animation = "hideMessage 2s linear forwards";
            }, 5000);
        }, 3250);
    }, 1000);
}