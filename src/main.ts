(() => {
  const body = document.querySelector("body");
  const pointerToggle = document.querySelector(".pointer-toggle");

  const handlePointerToggleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (body != null && pointerToggle != null) {
      body.classList.toggle("custom-pointer");

      (e.target as HTMLElement).style.cursor = "";

      if (!body.classList.contains("custom-pointer")) {
        (e.target as HTMLElement).style.cursor = "pointer";
      }
    }
  };

  if (body != null && pointerToggle != null) {
    pointerToggle.addEventListener(
      "click",
      handlePointerToggleClick as EventListener
    );
  }
})();
