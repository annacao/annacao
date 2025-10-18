// ===== PARTICLES =====
window.addEventListener("load", () => {
  const header = document.querySelector("header");
  const particleCount = 50; // number of particles

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random starting position
    const top = Math.random() * header.clientHeight;
    const left = Math.random() * header.clientWidth;
    particle.style.top = top + "px";
    particle.style.left = left + "px";

    // Random movement offsets
    const x = (Math.random() - 0.5) * 300;
    const y = Math.random() * 500;
    particle.style.setProperty("--x", x + "px");
    particle.style.setProperty("--y", y + "px");

    // Random animation duration
    particle.style.animationDuration = 5 + Math.random() * 5 + "s";

    header.appendChild(particle);
  }
});
