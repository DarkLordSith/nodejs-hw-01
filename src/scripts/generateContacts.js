const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

async function generateContacts(count) {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(
      `✅ Added ${count} new contacts. Amount: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error(error);
  }
}

const args = process.argv.slice(2);
const count = Number(args[0]) || 5;

generateContacts(count);
