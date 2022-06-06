//Создаём массив с объектами

toDoList = [
  {
    text: "Покушать",
    done: false,
  },
  {
    text: "Поспать",
    done: false,
  },
  {
    text: "Проснуться",
    done: false,
  },
  {
    text: "Кодить",
    done: false,
  },
  {
    text: "Получить оффер",
    done: false,
  },
];

// Release 2 - Создание списка дел

function render(array) {
  const list = document.querySelector(".list");
  list.textContent = "";
  array.forEach(function (element, i) {
    const div = document.createElement("div");
    div.classList.add("list_item");
    div.textContent = element.text;

    const check_button = document.createElement("input");
    check_button.type = "checkbox";
    check_button.id = "check";
    check_button.checked = toDoList[i].done
    check_button.addEventListener("click", () => {
        checkTodo(i)
        div.classList.add('done_task')
    })
    div.prepend(check_button);

    const delete_button = document.createElement("button");
    delete_button.textContent = "Х";
    delete_button.id = "delete";
    delete_button.addEventListener("click", () => {
        remove(i)
    })
    div.append(delete_button);

    list.append(div);
  });
}
render(toDoList);

// Release 4 - Создание удаляющей функции

function remove(i) {
  toDoList.splice(i, 1);
  render(toDoList);
}

//Release 5 - Добавление нового дела

function addTodo(text) {
  toDoList.push({
    text: text,
    done: false,
  });
  render(toDoList);
}

//Release 6 - Добавление дела через форму ввода

const button_add = document.getElementById("addTask");
const input_add = document.getElementById("task");
button_add.addEventListener("click", () => {
  if (input_add.value !== "") {
    addTodo(input_add.value);
    input_add.value = "";
  }
});


//Release 8

function checkTodo(i) {
  toDoList[i].done = !toDoList[i]
}
