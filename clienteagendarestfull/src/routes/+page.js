import { PORT } from "../lib/constants.js";
import { error } from "@sveltejs/kit";

export const load = async ({ fetch }) => {
  try {
    const contactsRes = await fetch(`http://localhost:${PORT}/agenda`);
    const contactos = await contactsRes.json();
    return {
      props: { contactos },
    };
  } catch (err) {
    error(499, "Error loading contacts");
  }
};
