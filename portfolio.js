const text = document.querySelector(".second")
function typing() {
    setTimeout(() => {
        text.textContent = "Student"

    }, 0)
    setTimeout(() => {
        text.textContent = "Programmer"

    }, 3500)

}
typing()
setInterval(typing, 7000)
