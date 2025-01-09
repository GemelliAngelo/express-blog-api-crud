// # DATABASE DATA
const posts = [
  {
    id: 1,
    title: "Ciambellone",
    content: "Contenuto1",
    image: "/ciambellone.jpeg",
    categories: ["HTML", "CSS"],
    published: true,
  },
  {
    id: 2,
    title: "Cracker alla barbabietola ",
    content: "Contenuto2",
    image: "/cracker_barbabietola.jpeg",
    categories: ["JS", "Php"],
    published: false,
  },
  {
    id: 3,
    title: "Pane fritto dolce",
    content: "Contenuto3",
    image: "/pane_fritto_dolce.jpeg",
    categories: ["Express"],
    published: true,
  },
  {
    id: 4,
    title: "Pasta alla barbabietola",
    content: "Contenuto4",
    image: "/pasta_barbabietola.jpeg",
    categories: ["NODE"],
    published: false,
  },
  {
    id: 5,
    title: "Torta paesana",
    content: "Contenuto5",
    image: "/torta_paesana.jpeg",
    categories: ["React.js"],
    published: true,
  },
];

// # EXPORTS
module.exports = posts;
