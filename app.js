const {
    createCategory,
    readCategories
} = require("./utils/crud-category.js");

const {
    createTag,
    readTags
} = require("./utils/crud-tag.js");

const {
    createPost,
    readPosts,
    readPostBySlug,
    updatePostById,
    deletePostById,
    readPublishedPosts,
    readPostsByContent
} = require("./utils/crud-posts.js");

// Creo una categoris
// createCategory("Sport");

// Leggo tutto le categorie
// readCategories(console.log);

// Creo un tag
// createTag("Calcio");

// Letto tutti i tags
// readTags(console.log);


// Creo un post
// createPost({
//     title: "Europa League",
//     slug: "europa-league",
//     categoryId: 2,
//     tags: {
//         connect: [{ id: 1 }]
//     },
//     image: "atalanta.png",
//     content: "Lookman sconfigge i tedeschi con una tripletta",
//     published: false
// }, console.log);

// Leggo tutti i posts
// readPosts(console.log);

// Leggo il post tramite slug
// readPostBySlug("mondiali-2006", console.log);

// Aggiorno il post
// updatePostById(18, {
//     title: "Mondiali 2006",
//     slug: "mondiali-2006",
//     categoryId: 2,
//     tags: {
//         connect: [{ id: 1 }]
//     },
//     image: "coppadelnonno.png",
//     content: "Campioni del mondo",
//     published: true
// }, console.log);

// Cancello il post
// deletePostById(18, console.log);

// Leggo i post pubblicati
// readPublishedPosts(console.log);

// Leggo i post tramite una parola compresa nel content
// readPostsByContent("tripletta", console.log);