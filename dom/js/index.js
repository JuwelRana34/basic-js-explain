const parent = document.getElementById("parent");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const demotext = document.getElementById('demotext')
btn.addEventListener("click", () => {
  const value = input.value;
  const li = document.createElement("li");
  li.setAttribute("class"," p-3 text-black bg-gray-100 rounded-md my-2 hover:bg-blue-200 transition-all hover:cursor-pointer flex flex-row justify-between")
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.setAttribute('class', 'py-2 px-5 bg-red-300 rounded-md text-red-500 mx-2 hover:bg-red-400 hover:text-red-600 font-semibold font-lg ')

  deleteBtn.addEventListener("click", (e) => {
    const child = e.target.parentElement;
    e.target.parentNode.parentNode.removeChild(child);
  });
  li.innerText = value;
  if (value !== "") {
    parent.appendChild(li);
    li.appendChild(deleteBtn);
  }

  input.value = "";

 
});

// parent.addEventListener( 'click', (e) => {
//      e.target.parentNode.removeChild(e.target)
// } );










