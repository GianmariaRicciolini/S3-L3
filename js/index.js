// const handleSubmit = function (e) {
//   e.preventDefault();
//   taskList();
// };

// const taskList = function () {
//   let result = document.getElementById("result");
//   let input = document.querySelector(".myform input");

//   let newTask = document.createElement("p");
//   newTask.textContent = input.value;

//   result.appendChild(newTask);

//   input.value = "";
// };

const aggiungiAllaTuaLista = document.getElementById("aggiungiAllaTuaLista");

const bottone = document.getElementById("btnAdd");
bottone.onclick = function () {
  if (aggiungiAllaTuaLista.value !== "") {
    console.log(aggiungiAllaTuaLista.value);

    const lista = document.getElementById("lista");

    const li = document.createElement("li");

    li.onclick = function (e) {
      e.target.remove();
    };

    li.innerText = aggiungiAllaTuaLista.value;
    console.log(li);

    lista.appendChild(li);

    aggiungiAllaTuaLista.value = "";
  }
};
