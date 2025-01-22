document.addEventListener("DOMContentLoaded", () => {
    const gold = "#FFBE00"
    const element = document.querySelector(".square");

  const squareAnimation = element.animate(
    {
        transform: [
             "translateX(0)",
             `translateX(calc(100vw - 100px)) rotate(360deg)`
        ],
        backgroundColor: [
            "gold", "blue", "crimson"
        ],
        offset: [0, 0.3, 1],
        easing: ['ease-in', 'linear'],
        composite: ['add', 'replace', 'add'],
    },
    {
      duration: 3000,
      delay: 1000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "linear",
      timeline: document.timeline
    }
  );
  
});
