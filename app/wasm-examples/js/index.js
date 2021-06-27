import targetData from "./randomDatas";

import("../pkg/index.js").then((module) => {


  const app = document.getElementById("app");

  const list = document.createElement('ul');

  const wasmSortAndUpdate = () => {
    const sorted_data = module.sort_str(targetData);
    const children = list.children;
    for (let i = 0; i < 50; i++) {
      children.item(i).textContent = sorted_data[i];
    }
  }

  const jsSortAndUpdate = () => {
    const sorted_data = targetData.sort();
    const children = list.children;
    for (let i = 0; i < 50; i++) {
      children.item(i).textContent = sorted_data[i];
    }
    
  }

  const wasmSortButton = document.createElement("button");
  wasmSortButton.textContent="wasmソート";
  wasmSortButton.addEventListener("click", wasmSortAndUpdate);
  app.appendChild(wasmSortButton);

  const jsSortButton = document.createElement("button");
  jsSortButton.textContent = "jsソート";
  jsSortButton.addEventListener("click", jsSortAndUpdate);
  app.appendChild(jsSortButton);

  app.appendChild(list);


  for (let i = 0; i < 50; i++) {
    const oneText = document.createElement("div");
    oneText.textContent = targetData[i];
    list.appendChild(oneText);
  }

});
