const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Creazione di una categoria
const createCategory = (name, cf) => {
    prisma.category.create({
        data: { name }
    })
        .then(category => cf(category))
        .catch(err => console.error(err));
}

// Lettura delle categorie
const readCategories = (cf) => {
    prisma.category.findMany()
        .then(categories => cf(categories))
        .catch(err => console.error(err));
}

module.exports = {
    createCategory,
    readCategories
}