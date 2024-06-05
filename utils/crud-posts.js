const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createPost = (data, cf) => {
    prisma.post.create({ data })
        .then(p => cf(p))
        .catch(err => console.error(err));
}

const readPostBySlug = (slug, cf) => {
    prisma.post.findUnique({
        where: { slug },
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    })
        .then(p => cf(p))
        .catch(err => console.error(err));
}

const readPosts = (cf) => {
    prisma.post.findMany({
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    })
        .then(posts => cf(posts))
        .catch(err => console.error(err));
}

const updatePostById = (id, data, cf) => {
    prisma.post.update({ where: { id }, data })
        .then(p => cf(p))
        .catch(err => console.error(err));
}

const deletePostById = (id, cf) => {
    prisma.post.delete({ where: { id } })
        .then(p => cf(p))
        .catch(err => console.error(err));
}

const readPublishedPosts = (cf) => {
    prisma.post.findMany({
        where: { published: true },
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    })
        .then(posts => cf(posts))
        .catch(err => console.error(err));
}

const readPostsByContent = (text, cf) => {
    prisma.post.findMany({
        where: { content: { contains: text } },
        include: {
            category: {
                select: {
                    name: true
                }
            },
            tags: {
                select: {
                    name: true
                }
            }
        }
    })
        .then(posts => cf(posts))
        .catch(err => console.error(err));
}

module.exports = {
    createPost,
    readPosts,
    readPostBySlug,
    updatePostById,
    deletePostById,
    readPublishedPosts,
    readPostsByContent
}