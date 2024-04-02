// place files you want to import through the `$lib` alias in this folder.

import { PORT } from "./constants.js";
// Get
const loadContacts = async () => {
  const contactsRes = await fetch(`http://localhost:${PORT}/agenda`);
  const contacts = await contactsRes.json();
  return {
    contacts,
  };
};

// Post
const addContact = async (contact) => {
  console.log("contacto -- ", contact);
  if (
    contact.name.trim() === "" ||
    contact.phone.trim() === "" ||
    contact.description.trim() === ""
  ) {
    alert("There can't be an empty field");
    return;
  }
  const response = await fetch(`http://localhost:${PORT}/agenda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  if (response.status !== 201) {
    alert("Error adding contact");
    return;
  }
  return response.json();
};

//Put
const saveContact = async (contact) => {
  const response = await fetch(
    `http://localhost:${PORT}/agenda/${contact.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }
  );
  console.log("contacto -- ", contact);
  if (response.status !== 200) {
    alert("Error saving contact");
  }
  return response.json();
};

// Delete
const deleteContact = async (id) => {
  const response = await fetch(`http://localhost:${PORT}/agenda/${id}`, {
    method: "DELETE",
  });
  if (response.status !== 204) {
    console.log(response.status);
    alert("Error deleting contact");
  }
  // Check if there's content in the response body before parsing it
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  } else {
    return null; // No response body or not JSON content
  }
};

String.prototype.isNumber = function () {
  return /^\d+$/.test(this);
};

export { loadContacts, addContact, saveContact, deleteContact };
