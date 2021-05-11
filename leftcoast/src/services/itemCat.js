import * as genresAPI from "./itemCat";

export const cats = [
  {
    _id: "0", 
  	name: "All Tools",
    symbol: "universal-access",
    count: 1
  },
  { 
  	_id: "1", 
  	name: "Drill Bits",
    symbol: "target",
    count: 3
  },
  {
  	 _id: "2", 
  	name: "Saw Blades" ,
    symbol: "data-increase",
    count: 1
  },
  { 
  	_id: "3", 
  	name: "Safety Items" ,
    symbol: "expand-o",
    count: 1
  },
  { 
  	_id: "4", 
  	name: "Electrical",
    symbol: "creative",
    count: 2
  },
  {
  	 _id: "5", 
  	name: "Abrasive" ,
    symbol: "cog",
    count: 2
  },
  { 
  	_id: "6", 
  	name: "Diamond Products" ,
    symbol: "diamond",
    count: 1
  },
  { 
  	_id: "7", 
  	name: "Chemicals",
    symbol: "tint",
    count: 1
  },
  {
  	 _id: "8", 
  	name: "Hand Tools" ,
    symbol: "wrench",
    count: 6
  },
  { 
  	_id: "9", 
  	name: "Shop Tools" ,
    symbol: "magic2",
    count: 3
  },
  { 
  	_id: "10", 
  	name: "Expendables" ,
    symbol: "refresh2",
    count: 3
  }
];

export function getCats() {
  return cats.filter(g => g);
}