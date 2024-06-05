const {
    createCategory,
    readCategories
} = require("./utils/crud-category.js");

const {
    createTag,
    readTags
} = require("./utils/crud-tag.js");

// Creo una categoris
// createCategory("Sport");

// Leggo tutto le categorie
// readCategories(console.log);

// Creo un tag
createTag("Calcio");

// Letto tutti i tags
readTags(console.log);
