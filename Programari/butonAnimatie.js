function animateButtons() {
    const buttons = document.querySelectorAll('.buton');
    let topPosition = 10;
    buttons.forEach((button, index) => {
        button.style.top = topPosition + "%";
        topPosition += 10;
        button.classList.add('animate');
    });
}