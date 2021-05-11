import * as genresAPI from "./genres";

const items = [
  {
    _id: "1533",
    title: "Black and Gold Bits Up To 1/2 Inch",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Minnesota Twist",
    display: "./display/bgsmall.png",
    images: "../itemPage/bgsmall_1.jpg",
  },
  {
    _id: "3648",
    title: "Black and Gold Bits Up To Inch",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Minnesota Twist",
    display: "./display/bgbig.png"
  },
  {
    _id: "1510",
    title: "Left Handed Drill Bits",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Minnesota Twist",
    display: "./display/lhbits.png"
  },
  {
    _id: "1573",
    title: "Cobalt Step Drill Index",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Patriot",
    display: "./display/stepcob.png"
  },
  {
    _id: "1616",
    title: "Titanium Step Drill Index",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "NTI",
    display: "./display/steptit.png"
  },
  {
    _id: "3909",
    title: "Annular Cutting Bits",
    genre: { _id: "100", name: "Metal Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "NTI",
    display: "./display/annular.png"
  },
  {
    _id: "1524",
    title: "Bosch Daredevil Spade Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch",
    display: "./display/daredevil.png"
  },
  {
    _id: "1509",
    title: "Spade Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/spade.png"
  },
  {
    _id: "1525",
    title: "Auger Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/auger.png"
  },
  {
    _id: "3462",
    title: "Bosch Nail Killer Auger Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch",
    display: "./display/nailkiller.png"
  },
  {
    _id: "3621",
    title: "Bellhanger Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/bellhanger.png"
  },
  {
    _id: "1511",
    title: "Forstner Bits",
    genre: { _id: "101", name: "Wood Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/forstner.png"
  },
  {
    _id: "1620",
    title: "Hammer Drill Bits Jacobs Chuck",
    genre: { _id: "102", name: "Concrete Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/conbit.png"
  },
  {
    _id: "3515",
    title: "Hammer Drill Bits SDS Plus",
    genre: { _id: "102", name: "Concrete Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/sdsplus.png"
  },
  {
    _id: "3525",
    title: "Hammer Drill Bits SDS Max",
    genre: { _id: "102", name: "Concrete Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/sdsmax.png"
  },
  {
    _id: "3555",
    title: "Hammer Drill Bits Spline",
    genre: { _id: "102", name: "Concrete Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/spline.png"
  },
  {
    _id: "3602",
    title: "Percussion Core Bits",
    genre: { _id: "102", name: "Concrete Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "ProTool",
    display: "./display/percussion.png"
  },
  {
    _id: "1597",
    title: "Bosch Blue Granite Masonary Bits",
    genre: { _id: "102", name: "Concrete Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch",
    display: "./display/bluegranite.png"
  },
  {
    _id: "3627",
    title: "Bosch Glass And Tile Bits",
    genre: { _id: "102", name: "Concrete Bits" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch",
    display: "./display/glassbit.png"
  },
  {
    _id: "3442",
    title: "CMT Teflon Coated Circular Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "CMT",
    display: "./display/cmtTeflon.png"
  },
  {
    _id: "3448",
    title: "CMT Carbide Circular Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "CMT",
    display: "./display/cmtcarb.png"
  },
  {
    _id: "3406",
    title: "Bosch Bi-Metal Reciprocating Saw Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch",
    display: "./display/boschrecip.png"
  },
  {
    _id: "9110",
    title: "Lennox Reciprocating Saw Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "Lennox",
    display: "./display/lennox.png"
  },
  {
    _id: "3395",
    title: "Carbide Grit Reciprocating Saw Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "Master Cut",
    display: "./display/carbgrit.png"
  },
  {
    _id: "3430",
    title: "Metal Cutting Carbide Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "Lifetime",
    display: "./display/metalcarb.png"
  },
  {
    _id: "1080",
    title: "Bi-Metal Jigsaw Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "Bosch",
    display: "./display/jigsaw.png"
  },
  {
    _id: "1094",
    title: "Portable Bandsaw Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "MK Morse",
    display: "./display/bandsaw.png"
  },
  {
    _id: "3469",
    title: "Bi-Metal Oscillating Tool Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "CMT",
    display: "./display/oscbim.png"
  },
  {
    _id: "3471",
    title: "HCS Oscillating Tool Blades",
    genre: { _id: "103", name: "Saw Blades" },
    availability: "In Stock",
    condition: "New",
    brand: "Oshlun",
    display: "./display/oschcs.png",
 
  },
  
  
];

export default items;

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find(m => m._id === id);
}

export function saveItem(item) {
  let itemInDb = items.find(m => m._id === item._id) || {};
  itemInDb.title = item.title;
  itemInDb.genre = genresAPI.genres.find(g => g._id === item.genreId);
  itemInDb.brand = item.brand;

  if (!itemInDb._id) {
    itemInDb._id = Date.now().toString();
    items.push(itemInDb);
  }

  return itemInDb;
}

export function deleteItem(id) {
  let itemInDb = items.find(m => m._id === id);
  items.splice(items.indexOf(itemInDb), 1);
  return itemInDb;
}
