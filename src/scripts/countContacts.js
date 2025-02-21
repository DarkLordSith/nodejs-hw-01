const { readContacts } = require('../utils/readContacts');

async function countContacts() {
  try {
    const contacts = await readContacts();
    console.log(`📊 The amount of contacts: ${contacts.length}`);
  } catch (error) {
    console.error(error);
  }
}

countContacts();
