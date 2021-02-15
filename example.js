/* IMPORT */
const paster = require("paster.js");

/* CREATE PASTE */
async function run() {
    const paste = await paster.create("My paste content")
    console.log(paste.link)
}

run().catch(err => console.log(err))