/*
1. Generate contacts
2. Add contacts to preview contacts from db.json
3. Write contacts to db.json
*/

import { createFakeContact } from '../utils/createFakeContact.js'
import { readContacts } from '../utils/readContacts.js'; 
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const contactList = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    const newContactsList = [...contactList, ...newContacts];
    await writeContacts(newContactsList);
};

generateContacts(5);
