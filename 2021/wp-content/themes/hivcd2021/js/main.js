let dices = document.querySelectorAll('.dice-box');
let playing = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let tlSet = [];

for (let i = 0; i < dices.length; i++) {
    let tl = gsap.timeline(
        {
            paused: true,
            onComplete: function () {
                playing[i] = false;
            },
            onReverseComplete: function () {
                playing[i] = false;
            }
        }
    );
    let dice = dices[i].querySelector('.class-dice');
    let diceText = dices[i].querySelector('.class-info');

    tl.to(dice, { yPercent: 100, duration: 0.5, ease: "none" })
        .set(dice, { yPercent: -100 })
        .to(dice, { yPercent: 0, duration: 0.3, ease: "none" })

        .to(dice, { yPercent: 100, duration: 0.2, ease: "none" })
        .set(dice, { yPercent: -100 })
        .to(dice, { yPercent: 0, duration: 0.1, ease: "none" })

        // .to(dice, { yPercent: 100, duration: 0.09, ease: "none" })
        // .set(dice, { yPercent: -100 })
        // .to(dice, { yPercent: 0, duration: 0.08, ease: "none" })

        // .to(dice, { yPercent: 100, duration: 0.07, ease: "none" })
        // .set(dice, { yPercent: -100 })
        // .to(dice, { yPercent: 0, duration: 0.07, ease: "none" })

        // .to(dice, { yPercent: 100, duration: 0.07, ease: "none" })
        // .set(dice, { yPercent: -100 })
        // .to(dice, { yPercent: 0, duration: 0.07, ease: "none" })

        .to(dice, { yPercent: 100, duration: 0.08, ease: "none" })
        .set(dice, { yPercent: -100 })
        .to(dice, { yPercent: 0, duration: 0.09, ease: "none" })

        .to(dice, { yPercent: 100, duration: 0.1, ease: "none" })
        .set(dice, { yPercent: -100 })
        .to(dice, { yPercent: 0, duration: 0.2, ease: "none" })
        .to(dice, { yPercent: 100, duration: 0.3, ease: "none" })
        .to(diceText, { y: 0, duration: 0.5, ease: "none" });
    tlSet.push(tl);
}
for (let i = 0; i < tlSet.length; i++) {
    dices[i].onmouseenter = () => {
        if (!playing[i]) {
            playing[i] = true;
            tlSet[i].restart();
        } else {
            tlSet[i].play();
        }
    };
    dices[i].onmouseleave = () => {
        tlSet[i].reverse();
    }
}








    //child tweens will inherit the duration and from the parent timeline!