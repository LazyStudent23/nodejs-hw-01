import { readContacts } from "../utils/readContacts";

export const countContacts = async () => {
    const contacts = await readContacts();
    return contacts.lenght;
};

console.log(await countContacts());
