window.onload = () => {
    eventListeners();
    revealContent();
};


function eventListeners() {
    const child = document.createElement('p');
    child.textContent = "Child element created dynamically";
    const parent = document.querySelector("p.red");
    parent.appendChild(child);

    const body = document.querySelector('body');
    body.addEventListener('click', event => console.log(`Capture ${event.type} at ${body.tagName}`), true);
    body.addEventListener('click', event => console.log(`Bubble ${event.type} at ${body.tagName}`));

    const div = document.querySelector('div');
    div.addEventListener('click', event => console.log(`Capture ${event.type} at ${div.tagName}`), true);
    div.addEventListener('click', event => console.log(`Bubble ${event.type} at ${div.tagName}`));

    const textToBeHigh = document.querySelector('[data-action="highlight"]');
    const highlight = 'highlight';

    const addHighlightButton = document.querySelector('#add-highlight');
    addHighlightButton.addEventListener('click', event => {
        event.preventDefault();
        console.log(`clicked  ${event.srcElement.tagName}`);
        addClass(textToBeHigh, highlight);
    });


    const removeHighlightButton = document.querySelector('#remove-highlight');
    removeHighlightButton.addEventListener('click', event => {
        event.preventDefault();
        console.log(`clicked  ${event.srcElement.tagName}`);
        removeClass(textToBeHigh, highlight);
    });


    function addClass(element, clazz) {
        element.classList.add(clazz);
    }

    function removeClass(el, clazz) {
        el.classList.remove(clazz);
    }
}

function revealContent() {
    const revealer = document.getElementsByClassName('revealer')[0];
    const isP = () => el => el.nodeType === 1;
    const elements = [...document.getElementsByClassName('reveal')]
        .filter(isP());
    revealer.onclick = () => {
        revealOrHide(elements);
    }
}

const revealOrHide = elements => elements.forEach(el => {
    const reveal = "reveal";
    const revealed = "revealed";
    if (el.className === reveal) {
        el.className = revealed
    }
    else if (el.className === revealed) {
        el.className = reveal;
    }
});
