import MicroModal from "micromodal";

const buttonOpen = document.querySelector(".burger-btn");
const buttonClose = document.querySelector(".burger-close-btn");
const heroContainer = document.querySelector(".hero-container");

MicroModal.init({
  onShow: (modal) => {
    if (modal.id === "modal-1") {
      document.body.classList.add("has-modal-open");
      buttonOpen.style.display = "none";
      buttonClose.style.display = "flex";
    }
  },
  onClose: (modal) => {
    if (modal.id === "modal-1") {
      document.body.classList.remove("has-modal-open");
      buttonClose.style.display = "none";
      buttonOpen.style.display = "flex";
    }
  },
  disableScroll: true,
  awaitOpenAnimation: true,
  debugMode: false,
  disableOverlayClose: true,
});

document.querySelectorAll(".item-modal").forEach((item) => {
  item.addEventListener("click", () => {
    MicroModal.close("modal-1");
  });
});

buttonClose.addEventListener("click", () => {
  MicroModal.close("modal-1");
});

function checkSize() {
  const descBreakpoint = 1440;

  if (window.innerWidth >= descBreakpoint) {
    document.body.classList.remove("has-modal-open");
    buttonClose.style.display = "none";
    buttonOpen.style.display = "flex";

    heroContainer.style.display = "flex";
  }
}

checkSize();

window.addEventListener("resize", checkSize);

document.querySelectorAll("[data-micromodal-trigger]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetModal = btn.getAttribute("data-micromodal-trigger");

    // Якщо modal-1 відкритий, закриваємо його
    const modal1 = document.getElementById("modal-1");
    if (modal1 && modal1.classList.contains("is-open")) {
      MicroModal.close("modal-1");
      document.body.classList.remove("micromodal-open");
    }

    // Трохи затримки для плавності (можна без цього)
    MicroModal.show(targetModal);
  });
});
