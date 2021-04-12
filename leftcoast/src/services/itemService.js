import * as genresAPI from "./genres";

const items = [
  {
    _id: "1533",
    title: "Black and Gold Bits Up To 1/2 Inch",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Minnesota Twist"
  },
  {
    _id: "3648",
    title: "Black and Gold Bits Up To Inch",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Minnesota Twist"
  },
  {
    _id: "1510",
    title: "Left Handed Drill Bits",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Minnesota Twist"
  },
  {
    _id: "1573",
    title: "Cobalt Step Drill Index",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Patriot"
  },
  {
    _id: "1616",
    title: "Titanium Step Drill Index",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "NTI"
  },
  {
    _id: "3909",
    title: "Annular Cutting Bits",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "NTI"
  },
  {
    _id: "1524",
    title: "Bosch Daredevil Spade Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch"
  },
  {
    _id: "1509",
    title: "Spade Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool"
  },
  {
    _id: "1525",
    title: "Auger Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool"
  },
  {
    _id: "3462",
    title: "Bosch Nail Killer Auger Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch"
  },
  {
    _id: "3621",
    title: "Bellhanger Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool"
  },
    {
    _id: "1511",
    title: "Forstner Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool"
  },
];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find(m => m._id === id);
}

export function saveMovie(item) {
  let itemInDb = items.find(m => m._id === item._id) || {};
  itemInDb.name = item.name;
  itemInDb.genre = genresAPI.genres.find(g => g._id === item.genreId);
  itemInDb.numberInStock = item.numberInStock;
  itemInDb.dailyRentalRate = item.dailyRentalRate;

  if (!itemInDb._id) {
    itemInDb._id = Date.now();
    items.push(itemInDb);
  }

  return itemInDb;
}

export function deleteItem(id) {
  let itemInDb = items.find(m => m._id === id);
  items.splice(items.indexOf(itemInDb), 1);
  return itemInDb;
}
