const { readContacts } = require('../utils/readContacts');

async function getAllContacts() {
  try {
    const contacts = await readContacts();
    console.log('📋 Contacts List:');
    console.table(contacts);
  } catch (error) {
    console.error(error);
  }
}

getAllContacts();
