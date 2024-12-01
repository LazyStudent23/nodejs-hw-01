import { writeContacts } from "../utils/writeContacts";

export const removeAllContacts = async () => writeContacts([]);

removeAllContacts();
