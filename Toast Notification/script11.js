const buttons = document.querySelector(".buttons");
const stack = document.querySelector(".stack");

buttons.addEventListener("click", (e) => {
    let box = document.createElement("div");
    box.classList.add("popup");

    if (e.target.classList.contains("success")) {
        box.classList.add("green");
        box.innerHTML = "<i class='bx bx-check-circle icon-tick'></i><p class='para'>Successfully submitted</p>";
        box.style.display = "flex";
    }
    if (e.target.classList.contains("error")) {
        box.classList.add("red");
        box.innerHTML = "<i class='bx bx-x-circle icon-wrong'></i><p class='para'>Please fix the error</p>";
        box.style.display = "flex";
    }
    if (e.target.classList.contains("invalid")) {
        box.classList.add("yellow");
        box.innerHTML = "<i class='bx bx-error-circle icon-error' ></i><p class='para'>Invalid input, check again</p>";
        box.style.display = "flex";
    }

    stack.append(box);

    setTimeout(() => {
        box.remove();
    }, 5000)
})