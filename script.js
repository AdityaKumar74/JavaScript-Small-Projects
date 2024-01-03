const getTodo = document.querySelector(".add");
const items = document.querySelector(".todos");
const searchTodo = document.querySelector(".search input");
// const getTrash = document.querySelector('.delete');
// console.log(getTrash);

const generateTemplate = (getTodoInp) => {
  // console.log(getTodoInp);
  const html = `
	<li class="list-group-item d-flex justify-content-between align-items-center">
		<span>${getTodoInp}</span>
		<i class="far fa-trash-alt delete"></i>
	</li>
`;
  items.innerHTML += html;
};

// add todos

getTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  const getTodoInp = getTodo.add.value.trim();
  if (getTodoInp.length) {
    generateTemplate(getTodoInp);
    getTodo.reset();
  }
  // console.log(getTodoInp);
});

// getTrash.addEventListener('click', (e) => {
// 	console.log("its");
// 	items.removeChild();
// 	e.stopPropagation();
// })

// delete todos

items.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (getSearch) => {
  Array.from(items.children)
    .filter((list) => {
      return !list.textContent.toLowerCase().includes(getSearch);
    })
    .forEach((list) => {
      list.classList.add("filtered");
    });
  // console.log(list);
  Array.from(items.children)
    .filter((list) => {
      return list.textContent.toLowerCase().includes(getSearch);
    })
    .forEach((list) => {
      list.classList.remove("filtered");
    });
};

// keyup event
searchTodo.addEventListener("keyup", () => {
  const getSearch = searchTodo.value.trim().toLowerCase();
  // console.log(getSearch);
  filterTodos(getSearch);
});
