const ul = document.querySelector("ul");
const addProduct = () => {
  const task = document.querySelector("input").value;
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" /> ${task}`;
  ul.appendChild(li);
};