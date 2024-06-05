const {
    createCategory,
    readCategories
} = require("./utils/crud-category.js");

// Creo una categoris
createCategory("Sport");

// Leggo tutto le categorie
readCategories(console.log);