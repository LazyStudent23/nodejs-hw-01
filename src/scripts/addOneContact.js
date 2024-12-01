import { createFakeContact } from "../utils/createFakeContact";
import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";


export const addOneContact = async () => {
    const contactsList = await readContacts();
    const contact = createFakeContact();
    await writeContacts([...contactsList, contact]);
};

addOneContact();
