let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    let isActive = this.classList.contains("active");
    let activeAccordion = document.querySelector(".accordion.active");

    if (activeAccordion && activeAccordion !== this) {
      activeAccordion.classList.remove("active");
      activeAccordion.nextElementSibling.style.maxHeight = null;
    }
    this.classList.toggle("active", !isActive);
    panel.style.maxHeight = isActive ? null : panel.scrollHeight + "px";
  });

  acc[i].addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      let panel = this.nextElementSibling;
      let isActive = this.classList.contains("active");
      let activeAccordion = document.querySelector(".accordion.active");

      if (activeAccordion && activeAccordion !== this) {
        activeAccordion.classList.remove("active");
        activeAccordion.nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle("active", !isActive);
      panel.style.maxHeight = isActive ? null : panel.scrollHeight + "px";
    }
  });
}
