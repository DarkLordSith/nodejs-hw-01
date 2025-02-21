const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function writeContacts(contacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

module.exports = { writeContacts };
