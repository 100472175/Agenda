const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Import the cors middleware
const bodyParser = require("body-parser");
const path = require("path"); // Import the path module

const app = express();
app.use(bodyParser.json());
app.use(cors());

let contacts = [];

// Read the contacts from the file
function readContactsFromFile(file) {
  const filePath = path.join(__dirname, file);
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts.json file:", error);
  }
}

function treatListFixId(contacts) {
  // Change the ids of the list for them to start from 1
  contacts.map((contact, index) => {
    contact.id = index + 1;
  });
  return contacts;
}
let cosa = contacts ?? 0;
// Save the contacts to the file
function saveContentToFile(file, content) {
  content = treatListFixId(content);

  const filePath = path.join(__dirname, file);
  try {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    contacts = readContactsFromFile("agenda.json");
  } catch (error) {
    console.error("Error writing contacts.json file:", error);
  }
}

contacts = readContactsFromFile("agenda.json");

// Set the context root
app.set("baseUrl", "/www");

// Serve static files from the 'www' folder
app.use(express.static(path.join(__dirname, "www")));

// Get all contacts
// The request is the incoming data
//
app.get("/agenda", (req, res) => {
  console.log("GET /agenda");
  contacts_list = readContactsFromFile("agenda.json");
  contacts_list.sort((a, b) => a.id - b.id);
  res.send(contacts_list);
});

// Add a new contact
app.post("/agenda", (req, res) => {
  console.log("POST /agenda");
  const newContact = req.body;
  contacts.push(newContact);
  contacts.sort((a, b) => a.id - b.id);
  saveContentToFile("agenda.json", contacts);
  res.status(201).send(newContact);
});

// Update an existing contact
app.put("/agenda/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`PUT /agenda/${id}`);
  const updatedContact = req.body;
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex < 0)
    return res.status(404).send({ message: "Contact not found" });
  contacts[contactIndex] = updatedContact;
  saveContentToFile("agenda.json", contacts);
  res.send(updatedContact);
});

// Delete a contact
app.delete("/agenda/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`DELETE /agenda/${id}`);
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex < 0) {
    console.log(`Contact not found, 404, id:` + id);
    return res.status(404).send({ message: "Contact not found" });
  }
  contacts.splice(contactIndex, 1);
  saveContentToFile("agenda.json", contacts);
  res.sendStatus(204);
});

// Redirect all other requests to the context root
/*
app.all("*", (req, res) => {
  res.redirect("/www");
});
*/
PORT = process.env.PORT || 13300;
// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
