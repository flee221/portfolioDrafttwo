import { searchInput } from "./components/ui_components/searchInput.js";
//import { githubApi } from "./apiRouter.js";
import { textanimate } from "./components/ui_components/textanimate.js";
import { asciiConvert } from "./components/ui_components/asciiConvert.js";
import { barChart } from "./components/ui_components/barChart.js";
import "./style.css";

function initApp() {
  const app = document.getElementById("app");

  const handleKeyInput = (event, inputElement) => {
    if (event.key === "Enter") {
      const query = inputElement.value.trim();

      inputElement.value = "";
    }
  };

  const handleButtonClick = (event, inputElement) => {
    const query = inputElement.value.trim();

    inputElement.value = "";
  };

  //All event handlers instantiated^

  const search = searchInput({
    placeholder: "Enter repo name...",
    onInputKeyPress: handleKeyInput,
    onButtonClick: handleButtonClick,
  });

  app.appendChild(textanimate("flisscodes", 50));
  app.appendChild(search);

  //DOM elements ^
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});
