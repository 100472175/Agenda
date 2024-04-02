import { e as error } from "../../chunks/index.js";
let PORT = 13300;
const load = async ({ fetch }) => {
  try {
    const contactsRes = await fetch(`http://localhost:${PORT}/agenda`);
    const contactos = await contactsRes.json();
    return {
      props: { contactos }
    };
  } catch (err) {
    error(499, "Error loading contacts");
  }
};
export {
  load
};
