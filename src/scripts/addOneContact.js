const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

async function addOneContact() {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];

    await writeContacts(updatedContacts);

    console.log(`✅ Contact added:`, newContact);
  } catch (error) {
    console.error(error);
  }
}

addOneContact();
