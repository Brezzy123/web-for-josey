/* =========================================
   COUNTDOWN TIMER
========================================= */

const targetDate = new Date("May 15, 2027 00:00:00");

function updateCountdown(){

    const now = new Date();

    const difference = targetDate - now;

    if(difference <= 0){

        document.getElementById("timer").innerHTML =
        "IT'S FINALLY HERE 💖✨";

        return;
    }

    const days =
    Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor((difference / (1000 * 60 * 60)) % 24);

    const minutes =
    Math.floor((difference / (1000 * 60)) % 60);

    const seconds =
    Math.floor((difference / 1000) % 60);

    document.getElementById("timer").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds 💕`;
}

updateCountdown();

setInterval(updateCountdown,1000);


/* =========================================
   MUSIC PLAYER
========================================= */

const song =
document.getElementById("song");

const playBtn =
document.getElementById("playBtn");

const albumCover =
document.querySelector(".album-cover");

let isPlaying = false;

playBtn.addEventListener("click", () => {

    if(!isPlaying){

        song.play();

        playBtn.innerHTML = "❚❚";

        isPlaying = true;

        albumCover.style.animation =
        "spin 4s linear infinite";

    } else {

        song.pause();

        playBtn.innerHTML = "▶";

        isPlaying = false;

        albumCover.style.animation =
        "none";
    }
});


/* =========================================
   YES BUTTON
========================================= */

document
.getElementById("yesBtn")
.addEventListener("click",() => {

    alert(
    "YAYYYYY 😭💖✨\n\nYou just made this website the happiest website alive."
    );

});


/* =========================================
   RUNAWAY NO BUTTON
========================================= */

const noBtn =
document.getElementById("noBtn");

noBtn.addEventListener("mouseover",() => {

    const randomX =
    Math.random() * 300;

    const randomY =
    Math.random() * 120;

    noBtn.style.left =
    randomX + "px";

    noBtn.style.top =
    randomY + "px";

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

    heart.style.opacity = "0.8";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.transition = "transform 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
        "translateY(-120vh)";

        heart.style.opacity = "0";

    },100);

    setTimeout(() => {

        heart.remove();

    },5000);
}

setInterval(createHeart,700);


/* =========================================
   SMOOTH APPEAR ANIMATION
========================================= */

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0)";
        }
    });
});


/* =========================================
   INITIAL SECTION STYLE
========================================= */

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
    "translateY(50px)";

    section.style.transition =
    "all 1s ease";
});


/* =========================================
   ADD SPIN ANIMATION TO CSS
========================================= */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes spin {

    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }
}

`;

document.head.appendChild(style);
