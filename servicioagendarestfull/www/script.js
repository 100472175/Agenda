// Fetch from a json to an array of tasks
const contacts = [];
PORT = 3300;
// Read from the json(tasks.json) and add to the array

const loadContactsBase = () => {
  contacts.length = 0;
  fetch("/agendaBase")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((task) => {
        contacts.push(task);
      });
      render();
      saveTasks();
    });
};

const loadContact = () => {
  fetch(`http://localhost:${PORT}/agenda`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((task) => {
        contacts.push(task);
      });
      render();
    });
};

// Remember you hae to pass the entire user object to the saveTasks function
const saveContacts = () => {
  fetch(`http://localhost:${PORT}/agenda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contacts),
  });
};

const saveContact = (contact) => {
  fetch(`http://localhost:${PORT}/agenda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
};

// Hay que hacer 3 cajas de texto, una para el nombre, otra para el teléfono y otra para la descripción (limite 50 chars)
const add = () => {
  const card_name = document.querySelector("#card-name").value;
  const card_phone = document.querySelector("#card-phone").value;
  const card_description = document.querySelector("#card-description").value;

  // Check is the task is composed of spaces
  if (
    card_name.trim() === "" ||
    card_phone.trim() === "" ||
    card_description.trim() === ""
  ) {
    vibrate([500]).then(() => {
      alert("There can't be an empty field");
      console.log("There can't be an empty field");
    });
    return;
  }
  const contact_card = {
    id: contacts.length + 1,
    name: card_name,
    phone: card_phone,
    description: card_description,
  };
  console.log(contact_card);
  contacts.push(contact_card);
  render();
  vibrate([200]);
  // Save the task to the json file
  saveContact(contact_card);
};

const remove = (index) => {
  vibrate([100, 100, 100, 100, 100, 100]);
  contacts.splice(index, 1);
  render();
  fetch(`/agenda/${index}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contacts),
  });
};

const render = () => {
  const taskListElement = document.querySelector("#contacts-list");
  taskListElement.innerHTML = "";
  contacts.forEach((contact) => {
    const taskElement = document.createElement("li");
    const taskElementName = document.createElement("h2");
    taskElementName.textContent = contact.name;
    const taskElementPhone = document.createElement("p");
    taskElementPhone.textContent = contact.phone;
    const taskElementDescription = document.createElement("p");
    taskElementDescription.textContent = contact.description;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      remove(contacts.indexOf(contact));
    });
    taskElement.appendChild(taskElementName);
    taskElement.appendChild(taskElementPhone);
    taskElement.appendChild(taskElementDescription);
    taskElement.appendChild(deleteButton);

    // ------------------- Swipe -------------------
    taskElement.addEventListener("touchstart", function (event) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    });

    taskElement.addEventListener("touchmove", function (event) {
      const currentX = event.touches[0].clientX;
      const currentY = event.touches[0].clientY;
      const diffX = currentX - startX;
      const diffY = currentY - startY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        event.preventDefault(); // Prevent vertical scrolling while swiping horizontally
      }
    });

    taskElement.addEventListener("touchend", function (event) {
      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 200) {
          remove(contacts.indexOf(task));
        }
      }
    });

    //taskElement.className = task.done ? "done_class" : "not_done_class";
    taskListElement.appendChild(taskElement);
  });
};

const vibrate = (pattern) => {
  // Check if the Vibration API is supported
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  } else {
    // Vibration API not supported
    console.log("Vibration API not supported");
  }
};

const addButton = document.querySelector("#fab-add");
const clearButton = document.querySelector("#fab-clear");

//addButton.addEventListener("touchend", add);
addButton.addEventListener("click", add);

// Añadir que la tecla de enter añada una tarea
document
  .querySelector("#card-name")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      add();
    }
  });

// El mousedown está puesto para que funcione en ordenadores sin pantalla táctil
addButton.addEventListener("mousedown", function (event) {
  touchStartTime = Date.now();
  touchTimer = setTimeout(() => {
    alert("Restored the contacts to the original state");
    loadContactsBase();
    clearTimeout(touchTimer);
  }, 2000); // 2000 milliseconds = 2 seconds
});

// El mouseup resetea el contador de tiempo cuando se deja de tocar
addButton.addEventListener("mouseup", function (event) {
  clearTimeout(touchTimer);
});

// El touchstart está puesto para que funcione en dispositivos con pantalla táctil
addButton.addEventListener("touchstart", function (event) {
  touchStartTime = Date.now();
  touchTimer = setTimeout(() => {
    alert("Restored the contacts to the original state");
    loadContactsBase();
    clearTimeout(touchTimer);
  }, 2000); // 2000 milliseconds = 2 seconds
});

// El touch end resetea el contador de tiempo cuando se deja de tocar
addButton.addEventListener("touchend", function (event) {
  clearTimeout(touchTimer);
});

// Carga las tareas guardadas en el archivo tasks.json
loadContact();

// Fix para el servidor que no muestra la etiqueta con id:add-task-container
const addTaskContainer = document.querySelector("#add-contact-container");
addTaskContainer.style.removeProperty("display");
/*
// ------------------- Debugging -------------------
const debug = document.querySelector("#title");
// Repeat this every 200ms:

setInterval(() => {
  debug.textContent = taskList.length;
}, 200);

*/
// Loop through each element with the class name "element-task-list"
