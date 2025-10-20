// ===== PARTICLES =====
window.addEventListener("load", () => {
  const container = document.querySelector("body"); // container
  const particleCount = 50; // number of particles  // new line
  const footer = document.querySelector("footer");  // new line
  const footerHeight = footer.offsetHeight;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random starting position
    const top = Math.random() * container.clientHeight; // updated
    const left = Math.random() * container.clientWidth; // updated
    particle.style.top = top + "px";
    particle.style.left = left + "px";

    // Random movement offsets
    const x = (Math.random() - 0.5) * (container.clientWidth - 20); // 20px buffer;
    const y = container.clientHeight - top - footerHeight; //updated
    particle.style.setProperty("--x", x + "px");
    particle.style.setProperty("--y", y + "px");

    // Random animation duration
    particle.style.animationDuration = 10 + Math.random() * 10 + "s"; // speed at which the particles move

    container.appendChild(particle);
  }
});
