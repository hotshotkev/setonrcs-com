(() => {
  const ageGate = document.getElementById("age-gate");
  const leaveScreen = document.getElementById("leave-screen");
  const ageConfirm = document.getElementById("age-confirm");
  const ageLeave = document.getElementById("age-leave");
  const ageApologyCheck = document.getElementById("age-apology-check");
  const pageContent = document.getElementById("page-content");
  const viewStage = document.getElementById("view-stage");
  const ageStorageKey = "a-little-help-age-confirmed";
  const viewButtons = [...document.querySelectorAll(".view-toggle-button")];
  let viewMode = window.matchMedia("(max-width: 650px)").matches ? "mobile" : "desktop";

  const updateViewMode = () => {
    document.body.dataset.viewMode = viewMode;
    viewButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.view === viewMode));
    });

    const viewportWidth = document.documentElement.clientWidth;
    if (viewMode === "desktop" && viewportWidth < 1024) {
      const desktopWidth = 1024;
      const scale = viewportWidth / desktopWidth;
      pageContent.style.width = `${desktopWidth}px`;
      pageContent.style.maxWidth = "none";
      pageContent.style.marginLeft = `${Math.max(0, (viewportWidth - desktopWidth * scale) / 2)}px`;
      pageContent.style.transform = `scale(${scale})`;
      viewStage.style.height = `${pageContent.scrollHeight * scale}px`;
      return;
    }

    pageContent.style.width = "";
    pageContent.style.maxWidth = "";
    pageContent.style.marginLeft = "";
    pageContent.style.transform = "";
    viewStage.style.height = "";
  };

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      viewMode = button.dataset.view;
      updateViewMode();
    });
  });
  window.addEventListener("resize", updateViewMode);
  updateViewMode();

  const subscriptionAck = document.getElementById("subscription-ack");
  const subscriptionLink = document.getElementById("subscription-link");

  if (subscriptionAck && subscriptionLink) {
    const updateSubscriptionAccess = () => {
      const acknowledged = subscriptionAck.checked;
      subscriptionLink.setAttribute("aria-disabled", String(!acknowledged));
      subscriptionLink.tabIndex = acknowledged ? 0 : -1;
    };

    subscriptionAck.addEventListener("change", updateSubscriptionAccess);
    subscriptionLink.addEventListener("click", (event) => {
      if (!subscriptionAck.checked) {
        event.preventDefault();
        subscriptionAck.focus();
      }
    });
    updateSubscriptionAccess();
  }

  const unlockPage = () => {
    ageGate.hidden = true;
    document.body.classList.remove("gated");
    pageContent.inert = false;
    pageContent.removeAttribute("aria-hidden");
  };

  if (sessionStorage.getItem(ageStorageKey) === "yes") {
    unlockPage();
  } else {
    document.body.classList.add("gated");
    pageContent.inert = true;
    pageContent.setAttribute("aria-hidden", "true");
    ageApologyCheck.focus();
  }

  ageApologyCheck.addEventListener("change", () => {
    ageConfirm.disabled = !ageApologyCheck.checked;
  });

  ageConfirm.addEventListener("click", () => {
    sessionStorage.setItem(ageStorageKey, "yes");
    unlockPage();
    document.querySelector(".wordmark").focus();
  });

  ageLeave.addEventListener("click", () => {
    ageGate.hidden = true;
    leaveScreen.hidden = false;
  });
})();
