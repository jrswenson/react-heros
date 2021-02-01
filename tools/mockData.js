const heroes = [
  {
    id: "1",
    name: "Aslaug",
    description: "warrior queen",
  },
  {
    id: "2",
    name: "Bjorn Ironside",
    description: "king of 9th century Sweden",
  },
  {
    id: "3",
    name: "Ivar the Boneless",
    description: "commander of the Great Heathen Army",
  },
  {
    id: "4",
    name: "Lagertha the Shieldmaiden",
    description: "aka Hlaðgerðr",
  },
  {
    id: "5",
    name: "Ragnar Lothbrok",
    description: "aka Ragnar Sigurdsson",
  },
  {
    id: "6",
    name: "Thora Town-hart",
    description: "daughter of Earl Herrauðr of Götaland",
  },
];

const villains = [
  {
    id: "30",
    name: "Madelyn",
    description: "the cat whisperer",
  },
  {
    id: "31",
    name: "Haley",
    description: "pen wielder",
  },
  {
    id: "32",
    name: "Ella",
    description: "fashionista",
  },
  {
    id: "33",
    name: "Landon",
    description: "Mandalorian mauler",
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  heroes,
  villains,
};
