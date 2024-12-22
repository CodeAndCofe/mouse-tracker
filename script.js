const point = document.querySelector(".point");
const scrn = document.querySelector(".screen");

scrn.addEventListener("pointermove", (e) => {
    const { clientX, clientY } = e;

    const rect = scrn.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    point.animate(
        [
            { left: `${relX -10}px`, top: `${relY - 10}px` }
        ],
        {
            duration: 1000, 
            fill: "forwards"
        }
    );
});
