const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Creazione di un tag
const createTag = (name, cf) => {
    prisma.tag.create({
        data: { name }
    })
        .then(tag => cf(tag))
        .catch(err => console.error(err));
}

// Lettura dei tags
const readTags = (cf) => {
    prisma.tag.findMany()
        .then(tags => cf(tags))
        .catch(err => console.error(err));
}

module.exports = {
    createTag,
    readTags
}