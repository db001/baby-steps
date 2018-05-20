const stepLinks = Array.from(document.querySelectorAll('.baby-step'));
const stepText = Array.from(document.querySelectorAll('.content-container'));

stepLinks.map(ele => {
    ele.addEventListener('click', showText);
})


function showText() {
    const stepNumber = this.id.match(/\d/g);
    const stepIndex = parseInt(stepNumber) - 1;
    const reqText = stepText[stepIndex];

    addHiddenClass(stepText);
    removeSelectedClass(stepLinks);

    reqText.classList.remove('hidden');

    this.classList.add('selected');
};

function addHiddenClass(arr) {
    arr.map(ele => {
        if (!ele.classList.contains('hidden')) {
            ele.classList.add('hidden');
        }
    })
}

function removeSelectedClass(arr) {
    arr.map(ele => {
        if (ele.classList.contains('selected')) {
            ele.classList.remove('selected');
        }
    })
}