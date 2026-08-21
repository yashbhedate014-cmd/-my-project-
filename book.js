const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
    const xposition = event.offsetX;
    const yposition = event.offsetY;
    const spanE1 = document.createElement("span");
    const size = Math.random() * 100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";

    spanE1.style.left = xposition + "px";
    spanE1.style.top = yposition + "px";
    bodyE1.appendChild(spanE1);
    setTimeout(() => {
        spanE1.remove();
    }, 6000);
});