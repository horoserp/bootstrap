let pressed = 0;

window.addEventListener("load", startup, false);

// Function to change Fixed/Sticky attribute
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

// Function to change Wrap attribute
function modifyWrap(elementID, attribute, buttonID) {
    const element = document.getElementById(elementID);
    element.classList.toggle(attribute);
    if(buttonID === 'flex-btn-1') {
        document.getElementById('flex-btn-2').classList.toggle("disabled");
        document.getElementById('flex-btn-3').classList.toggle("disabled");
    } else if (buttonID === 'flex-btn-2') {
        document.getElementById('flex-btn-1').classList.toggle("disabled");
        document.getElementById('flex-btn-3').classList.toggle("disabled");
    } else {
        document.getElementById('flex-btn-1').classList.toggle("disabled");
        document.getElementById('flex-btn-2').classList.toggle("disabled");
    }
}

// Function to change vertical alignment of Flex items
function flexAlign(attribute) {
    switch (attribute) {
        case 'start':
            document.getElementById("my-flex2").className = "d-flex flex-wrap bg-light align-content-start";
            break;
        case 'end':
            document.getElementById("my-flex2").className = "d-flex flex-wrap bg-light align-content-end";
            break;
        case 'center':
            document.getElementById("my-flex2").className = "d-flex flex-wrap bg-light align-content-center";
            break;
        case 'around':
            document.getElementById("my-flex2").className = "d-flex flex-wrap bg-light align-content-around";
            break;
        case 'between':
            document.getElementById("my-flex2").className = "d-flex flex-wrap bg-light align-content-between";
            break;
        case 'stretch':
            document.getElementById("my-flex2").className = "d-flex flex-wrap bg-light align-content-stretch";
            break;
    }
}

// Function to change the vertical alignment of a single Flex item
function alignSelf(attribute) {
    switch (attribute) {
        case 'start':
            document.getElementById("flex-item").className = "p-2 border border-3 border-info align-self-start";
            break;
        case 'end':
            document.getElementById("flex-item").className = "p-2 border border-3 border-info align-self-end";
            break;
        case 'center':
            document.getElementById("flex-item").className = "p-2 border border-3 border-info align-self-center";
            break;
        case 'baseline':
            document.getElementById("flex-item").className = "p-2 border border-3 border-info align-self-baseline";
            break;
        case 'stretch':
            document.getElementById("flex-item").className = "p-2 border border-3 border-info align-self-stretch";
            break;
    }
}

// Functions to run after load
function startup() {
    // Function to display color picked from color input
    document.querySelector("#picker").addEventListener("change", displayColor);
    function displayColor() {
        document.getElementById("output").innerHTML = this.value;
    }
}

// Function to add multiple attribute to select element
function toggleMultiple() {
    const element = document.getElementById("select1");
    const button = document.getElementById("selectButton");
    const element2 = document.getElementById("selectLabel1");
    element.toggleAttribute("multiple");
    if (button.innerHTML === "Change to Select Multiple") {
        button.innerHTML = "Change to Select One";
        element2.innerHTML = "Select List (Multiple)";
    } else {
        button.innerHTML = "Change to Select Multiple";
        element2.innerHTML = "Select List (One)"
    }
}

// Function to change the menu size of a Select input
function selectSize(size) {
    const element = document.getElementById("select2");
    switch(size) {
        case 'small':
            element.className = "form-select form-select-sm";
            break;
        case 'normal':
            element.className = "form-select";
            break;
        case 'large':
            element.className = "form-select form-select-lg";
            break;
    }
}

// Function to output selected range value
function outputValue(h4ID, inputID) {
    document.getElementById(h4ID).innerHTML = document.getElementById(inputID).value;
}