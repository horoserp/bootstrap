let pressed = 0;

function fixTop(position) {
    const element = document.getElementById("fixed");
    const topButton = document.getElementById("top");
    const bottomButton = document.getElementById("bottom");
    const stickyButton = document.getElementById("sticky");

    switch (position) {
        case 1:
            element.classList.toggle("fixed-top");
            disableButton(bottomButton, stickyButton);
            pressed = !pressed;
            if (pressed) {
                topButton.innerHTML = bottomButton.innerHTML = stickyButton.innerHTML = "Reset";
                changeBG(topButton);
            } else {
                resetInnerHTML();
                resetBG(topButton);
            }
            break;
        case 2:
            element.classList.toggle("fixed-bottom");
            disableButton(topButton, stickyButton);
            pressed = !pressed;
            if (pressed) {
                topButton.innerHTML = bottomButton.innerHTML = stickyButton.innerHTML = "Reset";
                changeBG(bottomButton);
            } else {
                resetInnerHTML();
                resetBG(bottomButton);
            }
            break;
        case 3:
            element.classList.toggle("sticky-top");
            disableButton(bottomButton, topButton);
            pressed = !pressed;
            if (pressed) {
                topButton.innerHTML = bottomButton.innerHTML = stickyButton.innerHTML = "Reset";
                changeBG(stickyButton);
            } else {
                resetInnerHTML();
                resetBG(stickyButton);
            }
            break;
    }

    function changeBG(element) {
        element.classList.remove("bg-secondary");
        element.classList.add("bg-warning");
    }

    function resetBG(element) {
        element.classList.remove("bg-warning");
        element.classList.add("bg-secondary");
    }

    function disableButton(button1, button2) {
        button1.classList.toggle("disabled");
        button2.classList.toggle("disabled");
    }

    function resetInnerHTML() {
        topButton.innerHTML = "Fix to Top";
        bottomButton.innerHTML = "Fix to Bottom";
        stickyButton.innerHTML = "Sticky";
    }

}

// Theme Switcher
function themeSwitch() {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
}