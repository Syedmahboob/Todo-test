fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const list = document.getElementById("todo-list");
    data.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.style.display = "flex";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "todo-checkbox";
      checkbox.value = todo.id;
      checkbox.style.marginRight = "5px";
      const label = document.createElement("label");
      label.htmlFor = "todo-checkbox";
      label.textContent = todo.title;
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      list.appendChild(listItem);
    });
    const deleteButton = document.getElementById("delete-completed");
    deleteButton.addEventListener("click", () => {
      const completedItems = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      completedItems.forEach((item) => {
        item.parentElement.remove();
      });
    });
  })
  .catch((error) => console.error(error));
